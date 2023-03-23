<script>
	let name = 'Svelete';
    let src="http://picsum.com/200/200" //example random photo
    let string ='some <string>string</string> with html.'
</script>

<!-- <img src="http://picsum.com/200/200"/>  example random photo -->
<!-- == -->
<!-- <img src={src}/> -->
<!-- == -->
<!-- <img {src} alt="Some Text {name}"/> -->
<!-- == -->
<!-- <img {src} alt={`Some Text ${name}`}/> -->
<img {src} alt="Some Text {name}"/>
<h1>Hello {name.toLowerCase()}!</h1>
<!-- <p>{string}</p> html not work -->
<p>{@html string}</p>



<style>
	h1 {
		color: red;
	}
</style>
