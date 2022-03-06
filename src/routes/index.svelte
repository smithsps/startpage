<script>
	import { onMount } from 'svelte';

	let searchInput;
	let searchTerm = '';

	let time;
	$: hour = time?.getHours();
	$: minute = String(time?.getMinutes()).padStart(2, '0');

	onMount(() => {
		time = new Date();
		searchInput.focus();

		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<svelte:head>
	<title>Home - Start Page</title>
</svelte:head>

<div class="grid grid-rows-4">
	<div />
	<div class="mx-auto">
		<h2 class="text-8xl text-slate-50 transition-opacity duration-150" class:opacity-0={!time}>
			{hour ?? 0} : {minute ?? 0}
		</h2>
	</div>
	<div class="mx-auto mt-6">
		<input
			bind:this={searchInput}
			bind:value={searchTerm}
			class="bg-zinc-800 text-4xl text-white border-none"
			type="text"
			placeholder="enter your action"
		/>
	</div>
	<div />
</div>
