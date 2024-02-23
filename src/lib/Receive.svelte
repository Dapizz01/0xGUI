<script>
    import success_svg from '../assets/success.svg';
    import error_svg from '../assets/error.svg';
    import info_svg from '../assets/info.svg';

    export let filename;

    const receive_file_encrypted = async () => {
        show_form = false;

        const response = await fetch(
            /* 'https://promaobfghoibelpbtwf.supabase.co/functions/v1/fetch_file' */
            'http://localhost:54321/functions/v1/fetch_file',
            {
                method: 'POST',
                body: JSON.stringify({
                    filename: filename + '.json',
                }),
            },
        );

        const response_blob = await response.text();
        const response_json = JSON.parse(response_blob);

        const payload_fetch = await fetch(response_json.payload);
        const payload_blob = await payload_fetch.blob();

        if (payload_blob != null) {
            let url = window.URL.createObjectURL(payload_blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = response_json.name;
            document.body.appendChild(a);
            a.click();
            a.remove();
        }
    };

    const handle_downloadclick = () => {
        promise = receive_file_encrypted();
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
                class="file-input file-input-bordered file-input-secondary block m-auto border-2"
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
                    <img src={success_svg} alt="Success icon" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Success!</h2>
                    The file is being downloaded right now.
                </div>
            </div>
        {:catch error}
            <div class="card items-center">
                <figure class="w-1/4">
                    <img src={error_svg} alt="Error icon" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Something went wrong...</h2>
                    The file hasn't been correctly downloaded (error {error}). Wait some time and
                    try again.
                </div>
            </div>
        {/await}
    {/if}
</div>
