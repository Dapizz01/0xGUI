<script>
    const receive_file = async () => {
        fetch('http://localhost:54321/functions/v1/fetch_file', {
            method: 'POST',
            body: JSON.stringify({
                file_code: file_code,
            }),
        })
            .then((result) => {
                if (!result.ok) {
                    console.log(result.status + ' - ' + result.statusText);
                    return;
                }
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
    };

    let file_code;
</script>

<div class="modal-box">
    <h3 class="font-bold text-lg">Receive a file.</h3>
    <div class="py-4">
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
