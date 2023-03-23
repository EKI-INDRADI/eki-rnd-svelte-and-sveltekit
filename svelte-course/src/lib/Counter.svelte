<!-- example counter -->
<script>
	export let initialCount = 0;
	// export let maxCount;
	// export let maxCount = 10;
	export let maxCount = undefined

  console.log($$props, $$restProps) // untuk console.log object props yang ada di app.svelte

	// let count = 0;
	// let count1 = 0;
	// let count2 = 0;

	let count = initialCount;

	// let string = `You have clicked ${count} times.`; // NOT REACTIVE
	// let string;

	//-------------------- REACTIVE STATEMENT = buat yg not reactive jadi reactive
	// $: {
	// 	console.log(`the count is ${count}`);
	// }

	// $: {
	// 	string = `You have clicked ${count} times.`; //  REACTIVE
	// }

	// $: string = `You have clicked ${count} times.`; //  REACTIVE LEBIH SEDERHANA

	// $: string = `the count total is ${count1 + count2} times.`; // REACTIVE

	//-----------------FUNCTION NOT REACTIVE
	// function getTotal() {
	// 	return count1 + count2;
	// }
	// $: string = `the count total is ${getTotal()}`; // TIDAK BISA REACTIVE JIKA MENGGUNAKAN FUNCTION
	//-----------------FUNCTION NOT REACTIVE

	//-----------------FUNCTION WITH REACTIVE

	// function getTotal(x, y) {
	// 	return x + y;
	// }

	// $: string = `the count total is ${getTotal(count1, count2)}`; // REACTIVE FUNCTION

	//-----------------FUNCTION WITH REACTIVE

	//------------------------- REACTIVE FUNCTION

	// function setCount2(x) {
	//   count2 = x;
	// }
	// $: setCount2(count1);
	// $: string = `Count2 is ${count2}`;

	//------------------------- REACTIVE FUNCTION

	// $: if (count > 5) { // by condition
	// 	console.log(`the count is ${count}`);
	// }

	//-------------------- REACTIVE STATEMENT = buat yg not reactive jadi reactive

	// function increment() {
	// 	count += 1;
	// }

	// function increment1() {
	// 	count1 += 1;
	// }

	// function increment2() {
	// 	count2 += 1;
	// }

	// const increment = () => {
	//   count += 1
	// }

	function increment() {
		if (count == maxCount) return;
		count += 1;
	}
</script>

<!-- <button on:click={increment}>Clicks {count}</button> -->
<!-- <button on:click={increment1}>Clicks {count1}</button> -->
<!-- <button on:click={increment2}>Clicks {count2}</button> -->
<button on:click={increment}>Clicks {count}</button>

<!-- <h3>{string}</h3> -->
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
