<script>
	// export let title = 'My Button';
</script>

<!-- <button>{title}</button> -->
<!-- <button>{children}</button> -->
<button><slot>Fallback</slot></button>

<!-- <style>
    button {
        border : none;
        background-color: #ff3e00;
        color: #ffffff;
        padding: 15px 20px;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }
</style> -->


<!--1-->
<!-- <style lang="scss">
	button {
		border: none;
		background-color: #ff3e00;
		color: #ffffff;
		padding: 15px 20px;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		&:hover {
			background-color: #fff;
		}
	}
</style> -->

<!--2-->
<!-- <style lang="scss">
    @use '../styles/variables.scss';
	button {
		border: none;
		background-color: #ff3e00;
		color: #ffffff;
		padding: 15px 20px;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		&:hover {
			background-color: variables.$color;
		}
	}
</style> -->

<!--3-->
<style lang="scss">
	//style error but still working, because eki-rnd-svelte-and-sveltekit\svelte-course\svelte.config.js
	button {
		border: none;
		background-color: #ff3e00;
		color: #ffffff;
		padding: 15px 20px;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		&:hover {
			background-color: variables.$color;
		}
	}
</style>