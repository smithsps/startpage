<script>
	import { onMount } from 'svelte';

	let searchTerm = '';

	let time = new Date();
	$: hour = time?.getHours();
	$: minute = String(time?.getMinutes()).padStart(2, '0');

	onMount(() => {
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
		<h2 class="text-8xl text-slate-50">
			{hour} : {minute}
		</h2>
	</div>
	<div class="mx-auto mt-6">
		<!-- svelte-ignore a11y-autofocus -->
		<input
			bind:value={searchTerm}
			class="bg-zinc-800 text-4xl text-white border-none"
			type="text"
			placeholder="enter your action"
			autofocus
		/>
	</div>
	<div />
</div>
