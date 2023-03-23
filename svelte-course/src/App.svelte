<script>
	// let name = 'Svelete';
	// let src="http://picsum.com/200/200" //example random photo
	// let string ='some <string>string</string> with html.'

	import Counter from './lib/Counter.svelte';

	// const maxCount = 6;

	const props = {
		maxCount : 10,
		initialCount: 5
	}


</script>

<!-- <img src="http://picsum.com/200/200"/>  example random photo -->
<!-- == -->
<!-- <img src={src}/> -->
<!-- == -->
<!-- <img {src} alt="Some Text {name}"/> -->
<!-- == -->
<!-- <img {src} alt={`Some Text ${name}`}/> -->
<!-- <p>{string}</p> html not work -->

<!-- <img {src} alt="Some Text {name}"/>
<h1>Hello {name.toLowerCase()}!</h1>
<p>{@html string}</p> -->

<!-- <Counter /> -->

<!--- --------------------------------- COMPONENT PROPS-->
<!-- <Counter initialCount={3} maxCount={10} />  -->
<!-- <Counter initialCount={3} />   -->
<!-- <Counter initialCount={3} {maxCount} /> -->
<Counter {...props}/>


<!--- --------------------------------- COMPONENT PROPS-->
<style>
	/* h1 {
		color: red;
	} */
</style>