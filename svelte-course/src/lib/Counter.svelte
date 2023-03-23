<!-- example counter -->
<script>
	let count = 0;
	// let string = `You have clicked ${count} times.`; // NOT REACTIVE
	let string;

	//-------------------- REACTIVE STATEMENT = buat yg not reactive jadi reactive
	// $: {
	// 	console.log(`the count is ${count}`);
	// }

	// $: {
	// 	string = `You have clicked ${count} times.`; //  REACTIVE
	// }

	$: string = `You have clicked ${count} times.`; //  REACTIVE LEBIH SEDERHANA

	$: if (count > 5) {
		// by condition
		console.log(`the count is ${count}`);
	}

	//-------------------- REACTIVE STATEMENT = buat yg not reactive jadi reactive

	function increment() {
		count += 1;
	}

	// const increment = () => {
	//   count += 1
	// }
</script>

<button on:click={increment}>Clicks {count}</button>

<h3>{string}</h3>
<!-- NOT REACTIVE jika sudah buat statement reactive akan jadi REACTIVE-->
<!-- <h3>You have clicked {count} times.</h3> REACTIVE -->

<!-- <button on:click={increment}>
  count is {count}
</button> -->

<!-- NExt 2:31 -->
<style>
	button {
		padding: 15px 20px;
	}
</style>
