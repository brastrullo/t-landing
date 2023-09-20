<script>
	import ContactButton from '$lib/components/ContactButton.svelte';
	import { fly, fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	const links = [
		{ name: 'github', url: 'https://github.com/brastrullo' },
		{ name: 'linkedin', url: 'https://linkedin.com/in/bradleyrastrullo' }
	];
</script>

<div
	class="flex justify-center mt-8 mb-1 font-thin border-b md:justify-end links border-inherit 5xl:text-2xl"
	in:fly={{ x: -300, delay: 300, duration: 500 }}
	out:fade
>
	{#each links as link, i}
		<a
			rel="noreferrer"
			href={link.url}
			target="_blank"
			class="font-light hover:underline underline-offset-4">{link.name}</a
		>
		{#if link !== links[links.length - 1]}
			<span class="mx-2">|</span>
		{/if}
	{/each}
</div>
