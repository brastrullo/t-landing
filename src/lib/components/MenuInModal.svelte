<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import ToggleButton from './ToggleButton.svelte';
	import Llo from './images/llo.svelte';
	import { onMount } from 'svelte';
	import { closeModal } from '$lib/utils/store';
	import { links } from '$lib/utils/utils';
	import MenuLinkItem from './MenuLinkItem.svelte';
	import { browser } from '$app/environment';

	let vh;
	
	if (browser) {
		document.querySelector('html')?.classList.add('overflow-hidden');
	}

	onMount(() => {setVh();});

	const setVh = () => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		return vh;
	};
</script>

<svelte:window on:resize={setVh} />
<div
	class={`menuContainer 3xl:container flex fixed top-0 left-0 flex-col w-screen overscroll-contain bg-black/70 z-[60] overflow-x-hidden`}
>
<div
		transition:fly={{ easing: quintInOut, y: -150, duration: 250 }}
		class="flex justify-between bg-white border-b dark:bg-black border-black/10 h-[4rem] dark:border-white/10"
	>
		<ToggleButton />
		<a href="/" on:click={closeModal} class="mx-4 my-auto font-light">bradleyrastru<Llo /></a>
		<button on:click={closeModal} class="m-4 text-3xl font-black text-black dark:text-white z-[80]"
			>X</button
		>
	</div>
	<ul class="flex flex-col w-screen text-2xl font-bold text-center h-[calc(100vh-4rem)]">
		<MenuLinkItem link={links[0]} i={0} />
		<MenuLinkItem link={links[1]} i={1} />
		<MenuLinkItem link={links[2]} i={2} />
		<MenuLinkItem link={links[3]} i={3} />
		<MenuLinkItem link={links[4]} i={4} />
	</ul>
</div>
<style>
	.menuContainer {
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
	}
</style>