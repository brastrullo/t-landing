<script>
	import '../app.postcss';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import ToggleButton from '$lib/components/ToggleButton.svelte';
	import ContactButtonSmall from '$lib/components/ContactButtonSmall.svelte';
	import Llo from '$lib/components/images/llo.svelte';
	import MenuInModal from '../lib/components/MenuInModal.svelte';
	import { menuToggle } from '$lib/utils/store';
	import { links } from '$lib/utils/utils';

	$: isHome = $page.url.pathname === '/';
	$: isAbout = $page.url.pathname === '/about';

	$: shouldBeHidden = isHome;
	$: hideContactButton = isAbout || isHome;

	const colorsArr = ['text-red-400', 'text-indigo-400', 'text-green-400'];
</script>

<header class="relative">
	<nav>
		<ul
			class="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-6 px-6 bg-gradient-to-b from-white sm:px-12 sm:h-12 xl:h-12 xl:text-xl dark:from-black via-white/90 3xl:x-center-fixed dark:via-black/90"
		>
			<li>
				<a href="/" class="w-2/3 font-extralight dark:text-white">bradleyrastru<Llo /></a>
			</li>
			<li class="flex justify-end w-1/3 space-x-6">
				{#if !$menuToggle}
					<a
						href="/about"
						class="font-semibold md:hidden"
						style:display={`${isAbout ? 'none' : ''}`}>about</a
					>
					<button class="font-semibold md:hidden" on:click={menuToggle.toggle}>menu</button>
				{/if}
				<ul class="items-center justify-end hidden space-x-6 md:flex">
					<li class:hidden={hideContactButton}><ContactButtonSmall /></li>
					<li class:hidden={isAbout} class="font-semibold hover:underline underline-offset-4">
						<a href="/about">about</a>
					</li>
					<li>
						<ToggleButton />
					</li>
				</ul>
			</li>
		</ul>
		<div class="3xl:container 3xl:mx-auto">
			<ul
				in:fly={{ y: 100, duration: 250, easing: quintInOut }}
				style:display={`${shouldBeHidden ? 'none' : ''}`}
				class="hidden fixed bottom-0 z-50 justify-end font-light origin-bottom-left rotate-90 space-x-[5vh] pr-[2vh] translate-x-0 md:flex w-[40vh] -translate-y-[40vh]"
			>
				{#each links.slice(2) as link, i}
					<li class={`transition hover:scale-110 hover:drop-shadow-sm`}>
						<a href={link.href} class:line-through={$page.url.pathname === `/${link.name}`}
							>{link.name.toUpperCase()}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	</nav>
</header>
{#if $menuToggle}
	<MenuInModal />
{/if}

<slot />
