<!-- <script>
	// export let title = 'My Button';
</script> -->
<script>
	export let size = 'small';
	export let shadow = false;
	// export let bgColor = undefined;  // 5   
	// export let textColor = undefined; // 5

	export let bgColor = 'inherit';  // 6  
	export let textColor = 'inherit'; // 6
	// <!--8-->
	// console.log($$slots);
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
<!-- <button class:size-lg={size == 'large'} class:size-sm={size == 'small'} class:shadow>
	<slot>Fallback</slot>
</button> -->


<!-- <button 
style="background-color: {bgColor}; color : {textColor}"   
class:size-lg={size == 'large'} 
class:size-sm={size == 'small'} 
class:shadow>
	<slot>Fallback</slot>
</button> -->

<!-- same : -->
<!-- <button 
style:background-color={bgColor}
style:color={textColor}
class:size-lg={size == 'large'} 
class:size-sm={size == 'small'} 
class:shadow>
	<slot>Fallback</slot>
</button> -->



<!--5-->
<!-- <button 
style:--buttonBgColor={bgColor}
style:--buttonTextColor={textColor}
class:size-lg={size == 'large'} 
class:size-sm={size == 'small'} 
class:shadow>
	<slot>Fallback</slot>
</button> -->


<!--7-->
<!-- <button 
style:--buttonBgColor={bgColor}
style:--buttonTextColor={textColor}
class:size-lg={size == 'large'} 
class:size-sm={size == 'small'} 
class:shadow>

	<div class="left-content">left</div>
	<slot>Fallback</slot>
</button> -->


<!--8-->
<!-- <button 
style:--buttonBgColor={bgColor}
style:--buttonTextColor={textColor}
class:size-lg={size == 'large'} 
class:size-sm={size == 'small'} 
class:shadow>

	<div class="left-content">
		<slot name="leftContent" />
	</div>

	<slot>Fallback</slot>
</button> -->


<!--9-->
<!-- <button 
style:--buttonBgColor={bgColor}
style:--buttonTextColor={textColor}
class:size-lg={size == 'large'} 
class:size-sm={size == 'small'} 
class:shadow> -->

<!-- {#if $$slots.leftContent} -->
<!-- remove extra space if left content undefined -->
	<!-- <div class="left-content">
		<slot name="leftContent" />
	</div>
{/if} -->

	<!-- <slot>Fallback</slot>
</button> -->




<!--10-->
<button 
style:--buttonBgColor={bgColor}
style:--buttonTextColor={textColor}
class:size-lg={size == 'large'} 
class:size-sm={size == 'small'} 
class:has-left={$$slots.leftContent}
class:shadow>

{#if $$slots.leftContent}
<!-- remove extra space if left content undefined -->
	<div class="left-content">
		<slot name="leftContent" />
	</div>
{/if}

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
<!-- <style lang="scss">
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
</style> -->



<!--5-->
<!-- <style lang="scss">
	//style error but still working, because eki-rnd-svelte-and-sveltekit\svelte-course\svelte.config.js
	button {
		border: none;
		background-color: var(--buttonBgColor);
		color: var(--buttonTextColor);
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
</style> -->


<!--7-->
<style lang="scss">
	//style error but still working, because eki-rnd-svelte-and-sveltekit\svelte-course\svelte.config.js
	button {
		display: flex;
		align-items: center;
		border: none;
		background-color: var(--buttonBgColor);
		color: var(--buttonTextColor);
		padding: 15px 20px;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		.left-content {
			margin-right: 10px;
		}
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