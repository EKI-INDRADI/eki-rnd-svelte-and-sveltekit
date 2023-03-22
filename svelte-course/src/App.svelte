<script>
    import svelteLogo from './assets/svelte.svg'
    import Counter from './lib/Counter.svelte'
</script>

<main>
    <div>
        <a href="https://vitejs.dev" target="blank">
            <img src="/vite.svg" class="logo" alt="vite logo" />
        </a>
        <a href="https://svelte.dev" target="_blank">
            <img src={svelteLogo} class="logo svelte" alt="Svelte logo" />
        </a>
    </div>
    <h1>Vite + Svelte</h1>

    <div class="card">
        <Counter />
    </div>
</main>