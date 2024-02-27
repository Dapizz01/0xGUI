<script>
    import { get_private_key } from '../lib/utils/crypto.js';
    import { sanitize_input } from '../lib/utils/misc.js';

    export let filename;

    const base64_to_arraybuffer = async (base64) => {
        return (await (await fetch(base64)).blob()).arrayBuffer();
    };

    const receive_file = async () => {
        show_form = false;

        let response;
        let payload;
        let aes_key;

        filename = sanitize_input(filename);

        try {
            response = await fetch(
                /* 'https://promaobfghoibelpbtwf.supabase.co/functions/v1/fetch_file' */
                'http://localhost:54321/functions/v1/fetch_file',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        filename: filename + '.json',
                    }),
                },
            );
        } catch (error) {
            throw new Error(
                'A network error happened while downloading the file. Make sure your Internet connection is stable and try again.',
            );
        }

        if (!response.ok) {
            throw new Error('The requested file does not exist.');
        }

        const response_text = await response.text();
        const response_json = JSON.parse(response_text);

        if (response_json.encrypted === 'yes') {
            const aes_key_encrypted = await base64_to_arraybuffer(response_json.aes_key);
            const iv = await base64_to_arraybuffer(response_json.iv);
            const payload_encrypted = await base64_to_arraybuffer(response_json.payload);

            try {
                aes_key = await window.crypto.subtle.unwrapKey(
                    'jwk',
                    aes_key_encrypted,
                    await get_private_key(),
                    {
                        name: 'RSA-OAEP',
                        // @ts-ignore
                        hash: 'SHA-256',
                    },
                    {
                        name: 'AES-GCM',
                    },
                    true,
                    ['encrypt', 'decrypt'],
                );
            } catch (error) {
                throw new Error(
                    'The selected file exists, but cannot be opened because the designated receiver is someone else.',
                );
            }

            const payload_arraybuffer = await window.crypto.subtle.decrypt(
                {
                    name: 'AES-GCM',
                    iv: iv,
                },
                aes_key,
                payload_encrypted,
            );

            payload = new Blob([payload_arraybuffer], {
                type: response_json.type,
            });
        } else {
            const payload_fetch = await fetch(response_json.payload);
            payload = await payload_fetch.blob();
        }

        if (payload != null) {
            let url = window.URL.createObjectURL(payload);
            let a = document.createElement('a');
            a.href = url;
            a.download = response_json.name;
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
    };

    const handle_downloadclick = () => {
        promise = receive_file();
    };

    let show_form = true;
    let promise;
</script>

<div class="modal-box">
    {#if show_form}
        <h3 class="font-bold text-lg">Receive a file.</h3>
        <div class="pt-4">
            <input
                type="text"
                placeholder="Type the file code"
                class="input input-bordered input-secondary block m-auto border-2"
                bind:value={filename}
            />
            <button
                class="btn block m-auto mt-4 btn-secondary"
                class:btn-disabled={filename === ''}
                on:click={handle_downloadclick}>Download</button
            >
        </div>
    {:else}
        {#await promise}
            <div class="text-center">
                <span class="loading loading-spinner loading-lg"></span>
            </div>
        {:then filename}
            <div class="card items-center">
                <figure class="w-1/4">
                    <svg
                        class="stroke-current"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Success!</h2>
                    The file is being downloaded right now.
                </div>
            </div>
        {:catch error}
            <div class="card items-center">
                <figure class="w-1/4">
                    <svg
                        class="stroke-current"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Something went wrong...</h2>
                    {error}
                </div>
            </div>
        {/await}
    {/if}
</div>
