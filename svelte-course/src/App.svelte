<script>
	import Button from './lib/Button.svelte';
	import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte'; //https://svelte-icons-explorer.vercel.app/ -> Font Awesome
</script>

<!-- <script>
	import Button from './lib/Button.svelte';
</script> -->

<!-- <Button/> -->
<!-- <Button title="Something"/> -->
<!--<Button >Button Text</Button>-->
<!--// Button Text = children -->
<!-- <Button/> -->

<!-- <Button >Button Text</Button> -->

<!-- eki-rnd-svelte-and-sveltekit\svelte-course\src\lib\Button.svelte -->
<!-- <Button size="small" shadow>Button Text</Button> -->
<!-- <Button size="large" shadow>Button Text</Button> -->
<!-- <Button size="small" shadow bgColor="red" textColor="white">Button Text</Button> -->
<!-- <Button size="small" shadow bgColor="red" textColor="blue">Button Text</Button> -->
<!-- <Button size="small" shadow>Button Text</Button> -->
<!-- <Button size="small" shadow bgColor="red" textColor="blue">Button Text</Button> -->
<!-- <Button size="small" shadow>Button Text</Button> -->

<!-- <Button size="small" shadow><span slot="leftContent">Left</span>Button Text</Button> -->
<!-- <Button size="small" shadow>Button Text</Button> -->
<!-- <Button size="small" shadow /> -->

<!-- <Button size="small" shadow> -->
<!-- <span slot="leftContent">Left</span> -->
<!-- Button Text
</Button> -->

<!-- <Button size="small" shadow>
	<span slot="leftContent">Left</span>
	Button Text
</Button> -->

<!-- <Button size="small" shadow>
	<span style:width="20px" slot="leftContent"><FaAngellist /></span>
	Button Text
</Button> -->

<Button size="small" shadow>
	<div style:width="20px" slot="leftContent"><FaAngellist /></div>
	Button Text
</Button>

<style>
</style>
