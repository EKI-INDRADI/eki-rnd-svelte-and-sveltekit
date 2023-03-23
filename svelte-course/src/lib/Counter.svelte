<!-- example counter -->
<script>
	let count = 0;
	let string = `You have clicked ${count} times.`;

	function increment() {
		count += 1;
	}

	// const increment = () => {
	//   count += 1
	// }
</script>

<button on:click={increment}>Clicks {count}</button>

<h3>{string}</h3>

<!-- <button on:click={increment}>
  count is {count}
</button> -->

<!-- NExt 2:31 -->
<style>
	button {
		padding: 15px 20px;
	}
</style>
