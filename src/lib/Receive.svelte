<script>
    const show_modal = () => {
        // @ts-ignore
        document.getElementById('receive_modal').showModal();
    };

    const receive_file = async () => {
        fetch('http://localhost:54321/functions/v1/fetch_file', {
            method: 'POST',
            body: JSON.stringify({
                file_code: file_code,
            }),
        })
            .then((result) => {
                return result.blob();
            })
            .then((blob) => {
                if (blob != null) {
                    let url = window.URL.createObjectURL(blob);
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = 'test';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                }
                console.log(blob);
            });

        /* 
        const reader = response.body.getReader();
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                console.log('Stream over');
                break;
            }
            console.log(value);
        } */
    };

    let file_code;
</script>

<button class="btn btn-secondary" on:click={show_modal}>receive</button>
<dialog id="receive_modal" class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Receive a file</h3>
        <div class="py-4 flex flex-col">
            <input
                type="text"
                placeholder="Type the file code"
                class="file-input file-input-bordered file-input-primary block m-auto"
                bind:value={file_code}
            />
            <button
                class="btn block m-auto"
                class:btn-disabled={file_code === ''}
                on:click={receive_file}>Receive</button
            >
        </div>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
