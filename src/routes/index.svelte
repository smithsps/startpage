<script>
	import { onMount } from 'svelte';
	import { library } from './bookmarks';

	let searchInput;

	export function handleSearch(input) {
		console.log(input);
	}

	export function rowSpan(span) {
		switch (span) {
			case 1:
				return 'row-span-1';
			case 2:
				return 'row-span-2';
			case 3:
				return 'row-span-3';
			case 4:
				return 'row-span-4';
		}

		throw Error('missing row-span-' + span);
	}

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
	<div class="mx-auto mt-32">
		<h2 class="text-8xl text-slate-50 transition-opacity duration-150" class:opacity-0={!time}>
			{hour ?? 0} : {minute ?? 0}
		</h2>
	</div>
	<div class="mx-auto mt-10">
		<input
			bind:this={searchInput}
			on:keyup={({ target: { value } }) => handleSearch(value)}
			class="bg-zinc-800 text-4xl text-white border-none"
			type="text"
			placeholder="enter your action"
		/>
	</div>
	<div class="mx-auto row-span-2">
		<div class="grid grid-flow-col grid-rows-6 gap-6 text-white">
			{#each library.categories as category}
				<div
					class={[
						'border w-80 py-2 pl-2 w-100',
						rowSpan(category.bookmarks.length),
						category.class
					].join(' ')}
				>
					<span class="text-xl">{category.name}</span>
					<div class="ml-2">
						{#each category.bookmarks as bookmark}
							<div class="">
								<a href={bookmark.href}>{bookmark.name}</a>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
