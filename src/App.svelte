<script>
    // Styles
    import 'tailwindcss/tailwind.css';
    import './lib/styles/style.css';
    // Svelte modules
    import { themeChange } from 'theme-change';
    import { onMount } from 'svelte';
    // Other components
    import Header from './lib/Header.svelte';
    import Send from './lib/Send.svelte';
    import Receive from './lib/Receive.svelte';
    import Key from './lib/Key.svelte';
    import Footer from './lib/Footer.svelte';

    let send_modal_status = true; // true -> visible, false -> hidden
    let receive_modal_status = true;
    let url_filename = new URLSearchParams(window.location.search).get('file');

    onMount(() => {
        themeChange(false);
        if (url_filename !== '' && url_filename !== null) {
            show_receive_modal();
        }
    });

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
    const hide_receive_modal = () => {
        receive_modal_status = false;
        url_filename = '';
    };
</script>

<main id="page_container">
    <div id="content_wrap">
        <Header />

        <Key />

        <div class="text-center">
            I want to...
            <div class="group">
                <button class="btn btn-primary" on:click={show_send_modal}>send</button>
                <button class="btn btn-secondary" on:click={show_receive_modal}>receive</button>
            </div>
            a file.
        </div>
    </div>

    <Footer />

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
            <Receive filename={url_filename} />
        {/if}
        <form method="dialog" class="modal-backdrop">
            <button on:click={hide_receive_modal}>close</button>
        </form>
    </dialog>
</main>
