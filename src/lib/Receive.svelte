<script>
    const show_modal = () => {
        // @ts-ignore
        document.getElementById('receive_modal').showModal();
    };
</script>

<button class="btn btn-secondary" on:click={show_modal}>receive</button>
<dialog id="receive_modal" class="modal">
    <div class="modal-box">
        <h3 class="font-bold text-lg">Receive a file</h3>
        <div class="py-4 flex flex-col">
            <input type="text" placeholder="Type the file code" class="input w-full max-w-xs" />
            <button class="btn">Receive</button>
        </div>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>
