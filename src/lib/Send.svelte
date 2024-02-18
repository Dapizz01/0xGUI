<script>
    import { onDestroy } from 'svelte';

    onDestroy(() => {
        promise = undefined;
        selected_file = '';
        show_form = true;
    });

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

    const handle_click = () => {
        promise = send_file();
    };

    let promise;
    let selected_file = '';
    let show_form = true;
</script>

<div id="modal_container" class="modal-box">
    {#if show_form}
        <div id="send_form">
            <h2 class="font-bold text-lg">Send a file.</h2>
            <div class="py-4 text-center">
                <div class="alert">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="stroke-info shrink-0 w-6 h-6"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path></svg
                    >
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
                    class="file-input file-input-bordered file-input-primary block m-auto"
                    id="input_file"
                    bind:value={selected_file}
                />
                <button
                    class="btn max-w-40 block m-auto"
                    class:btn-disabled={selected_file === ''}
                    on:click={handle_click}>Send</button
                >
            </div>
        </div>
    {:else}
        {#await promise}
            <div>
                <span class="loading loading-spinner"></span>
            </div>
        {:then file_code}
            <div>
                File sent correctly! The file code is {file_code} <br />
                Remember, the file code will expire in 7 days.
            </div>
        {:catch error}
            <div>Error {error} occured.</div>
        {/await}
    {/if}
</div>
