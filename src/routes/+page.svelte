<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { fade, fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import ContactButton from '$lib/components/ContactButton.svelte';
	import SceneDefault from '$lib/components/SceneDefault.svelte';
	import WhiteBorder from '$lib/components/WhiteBorder.svelte';
	import { browser } from '$app/environment';

	let windowHeight = 0;
	let windowWidth = 0;
	let element1;
	let scrollY = 0;

	const colorsArr = ['text-red-400', 'text-indigo-400', 'text-green-400'];
	const navItems = ['clients', 'blog', 'social'];

 if (browser) {
	 const scrollArea = document.querySelector('#scrollArea');
	 if (scrollArea) {
		console.log({scrollArea})
		scrollArea.addEventListener('click', () => console.log('click'));
	 }
 }
</script>

<svelte:window bind:scrollY bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />
<h1 class="hidden">Home</h1>
<div
	class="fixed w-screen h-screen h-[100dvh] px-4 pt-6 pb-10 overflow-hidden -translate-x-1/2 -translate-y-1/2 bg-white overscroll-contain xl:pt-12 3xl:container 3xl:mx-auto top-1/2 left-1/2 sm:p-10 dark:bg-black"
>
	<div class="w-full h-full overflow-hidden bg-gray-500 overscroll-contain">
		<Canvas>
			<SceneDefault />
		</Canvas>
	</div>
</div>
<WhiteBorder />
<div
	id="scrollArea"
	class="overflow-x-hidden bg-transparent 3xl:container 3xl:mx-auto snap-y snap-mandatory scroll-smooth"
>
	<div class="return-home" />
	<div
		class="flex flex-col justify-end w-screen transition-opacity 3xl:container 3xl:mx-auto sm:flex-row sm:justify-between sm:items-end sm:p-20 sm:h-screen sm:h-[100dvh]"
	>
		<div class="flex flex-col justify-end h-screen h-[100dvh] sm:h-auto snap-end introContainer">
			<p
				style={`transform: translate(-${scrollY * 0.7 * 10}px, ${scrollY}px); opacity: ${
					10 / scrollY
				};`}
				bind:this={element1}
				class={`${
					scrollY > 75 ? 'invisible' : ''
				} z-40 text-red-400 home-main-text text-5xl sm:text-7xl sm:max-w-80 mx-4 md:max-w-[40rem] font-bold mb-8 sm:mb-0 5xl:text-8xl`}
				in:fade
				out:fly={{ y: 300, duration: 250, easing: quintInOut }}
			>
				"I create UI, Motion Graphics and anything we can imagine.
			</p>
			<span
				style={`transform: translate(0px, ${scrollY}px); opacity: ${10 / scrollY};`}
				class={`${
					scrollY > 25 ? 'invisible' : ''
				} animate-bounce sm:visible pb-1 sm:hidden text-center text-xs font-extralight opacity-60 z-50`}
				>scroll down</span
			>
		</div>
		<div
			style={`${
				windowWidth > 640
					? `transform: translate(${scrollY * 0.7 * 10}px, ${scrollY}px); opacity: ${10 / scrollY};`
					: ''
			}`}
			class={`${
				scrollY > 25 ? 'sm:invisible' : ''
			} buttonContainer snap-end sm:visible h-screen h-[100dvh] sm:h-auto text-2xl flex flex-col justify-end sm:w-1/2 sm:bottom-20 sm:right-20 text-center sm:text-right mb-8 sm:mb-0`}
		>
			<p
				class="z-40 home-sub-text 5xl:text-4xl mb-[calc(25vh)] text-green-300 px-2 sm:px-0 sm:mb-4 sm:pl-4 font-light drop-shadow-2xl sm:bg-none"
				in:fade
				out:fly={{ x: 600, duration: 250, easing: quintInOut }}
			>
				A multi-disciplinary creative using JS & CSS
			</p>
			<div
				in:fade
				out:fly={{ delay: 100, x: 600, duration: 250, easing: quintInOut }}
				class="z-40 drop-shadow-2xl"
			>
				<ContactButton
					wrapperClassNames="my-[1.25rem]"
					classNames="home-cta font-bold transition drop-shadow 5xl:text-3xl text-indigo-900  mix-blend-screen border border-transparent py-6 sm:py-6 px-[calc(50%-4rem)] sm:px-8 md:px-14 lg:px-20 bg-indigo-300 dark:bg-indigo-300 dark:text-indigo-800 hover:text-indigo-300 hover:bg-transparent hover:border-indigo-300 dark:hover:text-indigo-300 dark:hover:bg-transparent dark:hover:border-indigo-300"
				/>
			</div>
		</div>
	</div>
	<div class="items-end hidden w-screen h-screen h-[100dvh] sm:flex 3xl:container 3xl:mx-auto">
		<div class="z-50" />
		<ul
			out:fly={{ y: 600, duration: 500 }}
			class="relative z-40 flex justify-around w-[calc(100%-10rem)] py-6 mx-auto mb-20 text-4xl font-extralight"
		>
			<li
				class="absolute top-0 w-full h-px bg-gradient-to-r from-red-400 via-indigo-400 to-green-400"
			/>
			{#each navItems as item, i}
				<li class={`transition hover:scale-110 text-shadow font-light ${colorsArr[i]}`}>
					<a href={`/${item}`} data-svelte-no-scroll>{item.toUpperCase()}</a>
				</li>
			{/each}
			<li
				class="absolute bottom-0 w-full h-px bg-gradient-to-r from-red-400 via-indigo-400 to-green-400"
			/>
		</ul>
	</div>
</div>
