<script>
    import 'tailwindcss/tailwind.css';
    import Header from './lib/Header.svelte';
    import Send from './lib/Send.svelte';
    import Receive from './lib/Receive.svelte';
</script>

<main>
    <Header />

    <div class="text-center">
        I want to...
        <div class="group">
            <Send />
            <Receive />
        </div>
        a file.
    </div>
</main>
