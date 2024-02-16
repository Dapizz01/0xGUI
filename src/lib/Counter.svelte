<script>
    let count = 0;
    const increment = () => {
        count += 1;
    };
</script>

<button on:click={increment} class="btn btn-success">
    count is {count}
    <input type="checkbox" class="toggle" checked />
</button>
