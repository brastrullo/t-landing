<script lang="ts">
	import { fly, fade, slide } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { quintInOut } from 'svelte/easing';
	import { toggleModal as toggleModalUtils } from '$lib/utils/utils';
  import ToggleButton from './ToggleButton.svelte';
  import Llo from './images/llo.svelte';
	import { writable } from 'svelte/store';
  import { onMount } from 'svelte';

  export let modalIsOpen = writable(false);
  const toggleModal = (e: Event) => { toggleModalUtils(modalIsOpen); return e};

  let ready = false;
  onMount(() => ready = true);

	const links = [
		{ name: 'home', href: '/' },
		{ name: 'about', href: '/about' },
		{ name: 'clients', href: '/clients' },
		{ name: 'blog', href: '/blog' },
		{ name: 'social', href: '/social' }
	];
	const linksLength = links.length;
  console.log({linksLength});
</script>

<div class="bg-black/70 fixed h-screen w-screen top-0 left-0 z-[60] flex flex-col">
  {#if ready}
	<div
		transition:fly={{ easing: quintInOut, y: -150, duration: 250 }}
		class="dark:bg-black bg-white flex justify-between border-b border-black/10 dark:border-white/10 h-[4rem]"
	>
		<ToggleButton />
		<a href="/" on:click={toggleModal} class="mx-4 my-auto font-light">bradleyrastru<Llo /></a>
		<button on:click={toggleModal} class="text-black z-[80] m-4 font-black text-3xl dark:text-white"
			>X</button
		>
	</div>

  <!-- transition:fly={{
    easing: quintInOut,
    x: i % 2 === 0 ? 400 : -400,
    duration: 425 - i * 5
  }} -->

	<ul transition:fade class="flex flex-col w-screen text-2xl font-bold text-center">
		{#each links as link, i (link.name)}
			<li
        transition:fly={{
          easing: quintInOut,
          x: i % 2 === 0 ? 400 : -400,
          duration: 425 - i * 5
        }}

				class={`h-[calc((100vh/${linksLength})-4rem)] flex border-b border-black/10 bg-white dark:border-white/10 dark:bg-black`}
			>
				<a
					class={`transition hover:scale-125 py-14 px-[calc(30vw-1rem)] m-auto`}
					href={link.href}
					on:click={toggleModal}>{link.name}</a
				>
			</li>
		{/each}
	</ul>
  {/if}
</div>
