<script>
	import '../app.postcss';
	import { browser } from '$app/environment'
	import { page } from '$app/stores'
	import { fly, fade, slide } from 'svelte/transition'
	import { quintInOut } from 'svelte/easing'
	import ToggleButton from '$lib/components/ToggleButton.svelte'
	import ContactButtonSmall from '$lib/components/ContactButtonSmall.svelte'
	import { writable, get } from 'svelte/store'
	import { darkMode } from '$lib/utils/store'
	import Llo from '$lib/components/images/llo.svelte'
	import MenuInModal from '../lib/components/MenuInModal.svelte';
	import { toggleModal } from '$lib/utils/utils';
	
	const modalIsOpen = writable(false)
	const isDarkMode = get(darkMode)

	const links = [
		{ name: 'home', href: '/' },
		{ name: 'about', href: '/about' },
		{ name: 'clients', href: '/clients' },
		{ name: 'blog', href: '/blog' },
		{ name: 'social', href: '/social' },
	]

	const linksLength = links.length

	$: isHome = $page.url.pathname === '/'
	$: isAbout = $page.url.pathname === '/about'
	// $: isClients = $page.url.pathname === '/clients'
	// $: isBlog = $page.url.pathname === '/blog'
	// $: isSocial = $page.url.pathname === '/social'

	$: shouldBeHidden = isHome
	$: hideContactButton = isAbout || isHome

	const colorsArr = ['text-red-400', 'text-indigo-400', 'text-green-400']

</script>

<header class="relative">
	<nav>
		<ul
			class="fixed top-0 left-0 z-50 flex items-center justify-between w-full h-6 sm:h-12 bg-gradient-to-b from-white dark:from-black via-white/90  dark:via-black/90"
		>
			<li>
				<a href="/" class="w-2/3 ml-2 sm:ml-4 font-extralight dark:text-white">bradleyrastru<Llo /></a>
			</li>
			<li class="flex justify-end w-1/3">
				{#if !$modalIsOpen}
					<a
						href="/about"
						class="mr-8 font-semibold md:hidden"
						style={`${isAbout ? 'display:none' : ''}`}>about</a
					>
					<button class="mr-4 font-semibold md:hidden" on:click={() =>toggleModal(modalIsOpen)}>menu</button>
				{/if}
				<ul class="items-center justify-end hidden md:flex">
					<li class:hidden={hideContactButton} class="mr-6"><ContactButtonSmall /></li>
					<li class="mr-4 font-semibold hover:underline underline-offset-4">
						<a href="/about">about</a>
					</li>
					<li>
						<ToggleButton />
					</li>
				</ul>
			</li>
		</ul>
		<ul
			in:fly={{ y: 100, duration: 250, easing: quintInOut }}
			style={`${shouldBeHidden ? 'display:none' : ''}`}
			class="hidden font-light md:flex fixed rotate-90 w-[40vh] justify-end translate-x-0 -translate-y-[40vh] bottom-0 origin-bottom-left z-50"
		>
			{#each links.slice(2) as link, i}
				<li class={`transition mr-12 hover:scale-110 hover:drop-shadow-sm`}>
					<a href={link.href} class:line-through={$page.url.pathname === `/${link.name}`}
						>{link.name.toUpperCase()}</a
					>
				</li>
				{/each}
		</ul>
	</nav>
</header>

{#if $modalIsOpen}
	<MenuInModal {modalIsOpen}/>
{/if}

<slot />
