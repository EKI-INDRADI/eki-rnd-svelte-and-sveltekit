<!-- <script>
	// export let title = 'My Button';
</script> -->
<script>
	export let size = 'small';
	export let shadow = false;
</script>

<!-- <button>{title}</button> -->
<!-- <button>{children}</button> -->
<!-- <button><slot>Fallback</slot></button> -->

<!--4-->
<!-- <button class="size-sm"><slot>Fallback</slot></button> -->
<!-- <button class="size-lg"><slot>Fallback</slot></button> -->
<!-- <button class={size == 'large'? 'size-lg' : 'size-sm'}><slot>Fallback</slot></button> -->
<!-- same : -->
<!-- <button  class:size-lg={size == 'large'} class:size-sm={size == 'small'} ><slot>Fallback</slot></button> -->

<!-- <button  class:size-lg={size == 'large'} class:size-sm={size == 'small'} class:shadow={shadow}><slot>Fallback</slot></button> -->
<!-- same : -->
<button class:size-lg={size == 'large'} class:size-sm={size == 'small'} class:shadow>
	<slot>Fallback</slot>
</button>

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
<!-- 
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
</style> -->

<!--4-->
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
			background-image: linear-gradient(rgba(0,0,0,0.4) 0 0);
		}
		&:active {
			background-image: linear-gradient(rgba(255,255,255,0.1) 0 0);
		}
		&.size-sm {
			padding: 15px 20px;
		}
		&.size-lg {
			padding: 20px 25px;
		}
		&.shadow {
			 box-shadow: 0 0 10px rgba(1,1,1,0.3);
		}
	}
</style>
