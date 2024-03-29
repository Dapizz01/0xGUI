<script>
    import { sanitize_input } from '../lib/utils/misc.js';

    const get_link_from_filename = (filename) => {
        return window.location.origin + window.location.pathname + '?file=' + filename;
    };

    const file_to_base64 = (file) => {
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
        }

        return new Promise((resolve, reject) => {
            reader.onload = (event) => {
                resolve(event.target.result);
            };
        });
    };

    const send_file = async () => {
        show_form = false;
        // @ts-ignore
        const file = document.getElementById('input_file').files[0];
        const form = new FormData();
        let file_details;
        let receiver_key_file;
        let receiver_public_key;
        let response;

        if (file.size > 400000) {
            throw new Error('The file is too large to upload.');
        }

        receiver_link = sanitize_input(receiver_link);

        if (encrypted) {
            const aes_key = await window.crypto.subtle.generateKey(
                {
                    name: 'AES-GCM',
                    length: 256,
                },
                true,
                ['encrypt', 'decrypt'],
            );

            const iv = window.crypto.getRandomValues(new Uint8Array(12));
            const file_encrypted = await window.crypto.subtle.encrypt(
                {
                    name: 'AES-GCM',
                    iv: iv,
                },
                aes_key,
                await file.arrayBuffer(),
            );

            try {
                receiver_key_file = await fetch('http://localhost:54321/functions/v1/fetch_file', {
                    method: 'POST',
                    body: JSON.stringify({
                        filename: receiver_link + '.json',
                    }),
                });
            } catch (error) {
                throw new Error(
                    'A network error happened while downloading the receiver key. Make sure your Internet connection is stable and try again.',
                );
            }

            if (!receiver_key_file.ok)
                throw new Error('The submitted receiver key does not exist.');

            try {
                receiver_public_key = await window.crypto.subtle.importKey(
                    'jwk',
                    JSON.parse(await receiver_key_file.text()),
                    {
                        name: 'RSA-OAEP',
                        hash: 'SHA-256',
                    },
                    true,
                    ['wrapKey'],
                );
            } catch (error) {
                throw new Error('The submitted key value is not a key, but a file instead.');
            }

            const aes_encrypted = await window.crypto.subtle.wrapKey(
                'jwk',
                aes_key,
                receiver_public_key,
                {
                    name: 'RSA-OAEP',
                },
            );

            file_details = {
                encrypted: 'yes',
                payload: await file_to_base64(
                    new Blob([file_encrypted], {
                        type: 'application/octet-stream',
                    }),
                ),
                iv: await file_to_base64(
                    new Blob([iv], {
                        type: 'application/octet-stream',
                    }),
                ),
                aes_key: await file_to_base64(
                    new Blob([aes_encrypted], {
                        type: 'application/octet-stream',
                    }),
                ),
                name: file.name,
                type: file.type,
            };
        } else {
            file_details = {
                encrypted: 'no',
                payload: await file_to_base64(file),
                name: file.name,
                type: file.type,
            };
        }
        const json_file = new File([JSON.stringify(file_details)], 'raw_json', {
            type: 'application/json',
        });

        form.append('file', json_file, json_file.name);
        form.append('expires', '24');

        try {
            response = await fetch('http://localhost:54321/functions/v1/send_file', {
                method: 'POST',
                body: form,
            });
        } catch (error) {
            throw new Error(
                'A network error happened while uploading the receiver encrypted file. Make sure your Internet connection is stable and try again.',
            );
        }

        if (!response.ok) {
            return response.status;
        } else {
            let response_text = await response.text();
            return response_text.split('/').pop().split('.')[0];
        }
    };

    const handle_uploadclick = () => {
        promise = send_file();
    };

    let promise;
    let receiver_link = '';
    let selected_file = '';
    let encrypted = false;
    let show_form = true;
</script>

<div class="modal-box">
    {#if show_form}
        <div id="send_form">
            <h2 class="font-bold text-lg">Send a file.</h2>
            <div class="pt-4 text-center">
                <div class="alert">
                    <svg
                        class="w-6 h-6 fill-current"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm9.4-5.5a1 1 0 1 0 0 2 1 1 0 1 0 0-2ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4c0-.6-.4-1-1-1h-2Z"
                            clip-rule="evenodd"
                        />
                    </svg>

                    <div>
                        <h3 class="font-bold">Details</h3>
                        <div>
                            Using this service, your file will be freely available on the Internet.
                            As such, it's <b>strongly recommended</b> to not send any kind of personal
                            information.
                        </div>
                        <h3 class="font-bold">Limitations</h3>
                        <div>
                            Check the repository link in the footer for the complete list. Also,
                            only files smaller than 400MB are allowed, and files will stay online
                            only for 24 hours.
                        </div>
                    </div>
                </div>
                <div class="block m-auto">
                    <div class="form-control w-56">
                        <label class="cursor-pointer label">
                            {#if !encrypted}
                                <span class="label-text">Not encrypted</span>
                            {/if}
                            <input
                                type="checkbox"
                                class="toggle toggle-primary"
                                bind:checked={encrypted}
                            />
                            {#if encrypted}
                                <span class="label-text">Encrypted</span>
                            {/if}
                        </label>
                    </div>
                </div>
                <input
                    type="file"
                    class="file-input file-input-bordered file-input-primary block m-auto my-4 border-2"
                    id="input_file"
                    bind:value={selected_file}
                />
                {#if encrypted}
                    <input
                        type="text"
                        placeholder="Write the receiver key"
                        class="input input-bordered input-primary block m-auto border-2"
                        bind:value={receiver_link}
                    />
                {/if}
                <button
                    class="btn btn-primary max-w-40 block m-auto mt-4"
                    class:btn-disabled={selected_file === '' || (encrypted && receiver_link === '')}
                    on:click={handle_uploadclick}>Upload</button
                >
            </div>
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
                    The file has been correctly uploaded. Share this link to other people:
                    <div class="alert">{get_link_from_filename(filename)}</div>
                    Or, alternatively, just share the file code:
                    <div class="alert">{filename}</div>
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
