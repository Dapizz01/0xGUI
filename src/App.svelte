<script>
    import 'tailwindcss/tailwind.css';
    import Header from './lib/Header.svelte';
    import Send from './lib/Send.svelte';
    import Receive from './lib/Receive.svelte';
    import { notifications, Notification } from './lib/stores/notifications';
    import Popup from './lib/Popup.svelte';

    const test_func = () => {
        $notifications.unshift(new Notification('success', 'Message'));
        console.log($notifications);
    };

    const show_send_modal = () => {
        // @ts-ignore
        document.getElementById('send_modal').showModal();
        send_modal_status = true;
    };

    const show_receive_modal = () => {
        // @ts-ignore
        document.getElementById('receive_modal').showModal();
        receive_modal_status = true;
    };

    const hide_send_modal = () => (send_modal_status = false);
    const hide_receive_modal = () => (receive_modal_status = false);

    let send_modal_status = true; // true -> visible, false -> hidden
    let receive_modal_status = true;
</script>

<main>
    <Header />

    <div class="text-center">
        I want to...
        <div class="group">
            <button class="btn btn-primary" on:click={show_send_modal}>send</button>
            <button class="btn btn-primary" on:click={show_receive_modal}>receive</button>
        </div>
        a file.
    </div>

    <!-- Modals -->
    <dialog id="send_modal" class="modal">
        {#if send_modal_status}
            <Send />
        {/if}
        <form method="dialog" class="modal-backdrop">
            <button on:click={hide_send_modal}>close</button>
        </form>
    </dialog>

    <dialog id="receive_modal" class="modal">
        {#if receive_modal_status}
            <Receive />
        {/if}
        <form method="dialog" class="modal-backdrop">
            <button on:click={hide_receive_modal}>close</button>
        </form>
    </dialog>

    <button on:click={test_func}>Test</button>
</main>
