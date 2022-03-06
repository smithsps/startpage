<script>
	import { onMount } from 'svelte';

	let time = new Date();
	$: hour = time.getHours();
	$: minute = time.getMinutes();

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
		<h2 class="text-8xl text-slate-50">{hour} : {minute}</h2>
	</div>
	<div />
</div>
