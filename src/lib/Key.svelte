<script>
    import { public_key_link } from './utils/crypto.js';
</script>

<div>
    Your key is:
    {#await public_key_link}
        <span class="loading loading-spinner loading-lg"></span>
    {:then key}
        {key}
    {/await}
</div>
