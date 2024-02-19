<script>
    import success_svg from '../assets/success.svg';
    import error_svg from '../assets/error.svg';
    import info_svg from '../assets/info.svg';

    const get_link_from_filename = (filename) => {
        return window.location.origin + window.location.pathname + '?file=' + filename;
    };

    const send_file = async () => {
        show_form = false;
        const form = new FormData();
        // @ts-ignore
        let file = document.getElementById('input_file').files[0];
        form.append('file', file, '@' + file.name);

        const response = await fetch('http://localhost:54321/functions/v1/send_file', {
            method: 'POST',
            body: form,
        });

        if (!response.ok) {
            // $notifications.unshift(new Notification('error', response.statusText));
            return response.status;
        } else {
            // $notifications.unshift(new Notification('success', response.statusText));
            let response_text = await response.text();
            return response_text.split('/').pop();
        }
    };

    const handle_uploadclick = () => {
        promise = send_file();
    };

    let promise;
    let selected_file = '';
    let show_form = true;
</script>

<div class="modal-box">
    {#if show_form}
        <div id="send_form">
            <h2 class="font-bold text-lg">Send a file.</h2>
            <div class="pt-4 text-center">
                <div class="alert">
                    <img src={info_svg} class="stroke-info shrink-0 w-6 h-6" alt="Info icon" />
                    <div>
                        <h3 class="font-bold">Details</h3>
                        <div>
                            Using this service, your file will be freely available on the Internet.
                            As such, it's <b>strongly recommended</b> to not send any kind of personal
                            information.
                        </div>
                        <h3 class="font-bold">Limitations</h3>
                        <div>
                            All of the limitations listed at <a href="https://0x0.st">0x0.st</a>,
                            plus a fixed expire date of 7 days.
                        </div>
                    </div>
                </div>
                <input
                    type="file"
                    class="file-input file-input-bordered file-input-primary block m-auto my-4 border-2"
                    id="input_file"
                    bind:value={selected_file}
                />
                <button
                    class="btn btn-primary max-w-40 block m-auto mt-4"
                    class:btn-disabled={selected_file === ''}
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
                    <img src={success_svg} alt="Success icon" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Success!</h2>
                    The file has been correctly uploaded. Share this link to other people:
                    <div class="alert">{get_link_from_filename(filename)}</div>
                    Or, alternatively, just share the file code:
                    <div class="alert">{filename}</div>
                    Remember, the file will stay online for 7 days.
                </div>
            </div>
        {:catch error}
            <div class="card items-center">
                <figure class="w-1/4">
                    <img src={error_svg} alt="Error icon" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Something went wrong...</h2>
                    The file hasn't been correctly sent (error {error}). Wait some time and try
                    again.
                </div>
            </div>
        {/await}
    {/if}
</div>
