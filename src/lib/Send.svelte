<script>
    const show_modal = () => {
        // @ts-ignore
        document.getElementById('send_modal').showModal();
    };

    const read_file = () => {
        // @ts-ignore
        // let file = document.getElementById('input_file').files[0];
        /* let exceptions = new Set([
            'application/x-dosexec',
            'application/x-executable',
            'application/x-sharedlib',
            'application/x-hdf5',
            'application/java-archive',
            'application/vnd.android.package-archive',
            'application/x-rar',
            'application/vnd.microsoft.portable-executable',
        ]);

        if (exceptions.has(file.type) || file.size >= 512 * 1024 * 1024) {
            // TODO: Show alert error
            return;
        }

        console.log(file);

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            send_file(event.target.result);
        });
        reader.readAsDataURL(file); */
    };

    const send_file = async () => {
        const form = new FormData();
        // @ts-ignore
        let file = document.getElementById('input_file').files[0];
        form.append('file', file, '@' + file.name);

        const response = await fetch('http://localhost:54321/functions/v1/send_file', {
            method: 'POST',
            body: form,
        });

        console.log(await response.text());
    };

    let selected_file = '';
</script>

<button class="btn btn-primary" on:click={show_modal}>send</button>
<dialog id="send_modal" class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Send a file.</h3>
        <div class="py-4 text-center">
            <input
                type="file"
                class="file-input file-input-bordered file-input-primary block m-auto"
                id="input_file"
                bind:value={selected_file}
            />
            <button
                class="btn max-w-40 block m-auto"
                class:btn-disabled={selected_file === ''}
                on:click={send_file}>Send</button
            >
        </div>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>