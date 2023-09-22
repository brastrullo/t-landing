<script lang="ts">
import { Canvas } from '@threlte/core';
import { fade, fly } from 'svelte/transition';
import { quintInOut } from 'svelte/easing';
import ContactButton from '$lib/components/ContactButton.svelte';
import SceneDefault from '$lib/components/SceneDefault.svelte';
import WhiteBorder from '$lib/components/WhiteBorder.svelte';
let windowWidth = 0;
let sTop;
let inverseScrollPercentage;
let scrollPercentage;
let scrollElement;
	
const colorsArr = ['text-red-400', 'text-indigo-400', 'text-green-400'];
const navItems = ['clients', 'blog', 'social'];
	
 const onScroll = () => {
	sTop = scrollElement.scrollTop;
	inverseScrollPercentage = (scrollElement.clientHeight - scrollElement.scrollTop) / scrollElement.clientHeight;
	scrollPercentage = 1 - (scrollElement.clientHeight - scrollElement.scrollTop) / scrollElement.clientHeight;
 }
</script>
<svelte:window bind:innerWidth={windowWidth} />
<h1 class="hidden">Home</h1>
<div
	class="overflow-hidden overscroll-none fixed top-1/2 left-1/2 px-4 pt-6 pb-10 w-screen bg-white -translate-x-1/2 -translate-y-1/2 sm:p-10 xl:pt-12 3xl:container 3xl:mx-auto dark:bg-black h-[100dvh]"
>
	<div class="w-full h-full overflow-hidden bg-gray-500 overscroll-none">
		<Canvas>
			<SceneDefault />
		</Canvas>
	</div>
</div>
<WhiteBorder />
<div
	id="scrollArea"
	bind:this={scrollElement}
	on:scroll={onScroll}
	class="h-[100dvh] fixed overflow-x-hidden overflow-y-scroll bg-transparent overscroll-none 3xl:container 3xl:mx-auto snap-y snap-mandatory"
>
	<div class="return-home" />
	<div
		class="snap-end flex flex-col justify-end w-screen transition-opacity sm:flex-row sm:justify-between sm:items-end sm:p-20 3xl:container 3xl:mx-auto sm:h-[100dvh]"
	>
		<div class="flex flex-col justify-end sm:h-auto h-screen h-[100dvh] snap-end sm:snap-none">
			<p
				style:transform={`translate(-${sTop * 0.7 * 10}px, ${sTop}px)`}
				class={`will-change-scroll z-40 text-red-400 home-main-text text-5xl sm:text-7xl sm:max-w-80 mx-6 sm:mx-4 md:max-w-[40rem] font-bold mb-4 sm:mb-0 5xl:text-8xl`}
				in:fade
				out:fly={{ y: 300, duration: 250, easing: quintInOut }}
			>
				"I create UI, Motion Graphics and anything we can imagine.
			</p>
			<span
				style:transform={`translate(0px, ${sTop}px)`}
				style:opacity={`${inverseScrollPercentage * .25}`}
				class={`mb-12 animate-bounce sm:visible pb-1 sm:hidden text-center text-xs font-extralight opacity-60 z-50`}
				>scroll down</span
			>
		</div>
		<div
			class={`h-screen h-[100dvh] snap-end sm:snap-none sm:visible sm:h-auto text-2xl flex flex-col justify-end sm:w-1/2 sm:bottom-20 sm:right-20 text-center sm:text-right pb-8 sm:pb-0 scroll-pb-15 scroll-mb-15 sm:mb-0`}
		>
		
		<p
				style:transform={`${windowWidth < 640 ? '' :`translate(${sTop * 0.7 * 10}px, ${sTop}px)`}`}
				class="will-change-scroll z-40 home-sub-text 5xl:text-4xl mb-[calc(25vh)] text-green-300 px-6 sm:px-0 sm:mb-4 sm:pl-4 font-light drop-shadow-2xl sm:bg-none"
				in:fade
				out:fly={{ x: 600, duration: 250, easing: quintInOut }}
			>
				A multi-disciplinary creative using JS & CSS
			</p>
			<div
				in:fade
				out:fly={{ delay: 100, x: 600, duration: 250, easing: quintInOut }}
				style:transform={`${windowWidth < 640 ? '' :`translate(${sTop * 0.7 * 10}px, ${sTop}px)`}`}
				class="z-40 drop-shadow-2xl will-change-scroll"
			>
				<ContactButton
					wrapperClassNames="my-[1.25rem]"
					classNames="home-cta font-bold transition drop-shadow 5xl:text-3xl text-indigo-900  mix-blend-screen border border-transparent py-6 sm:py-6 px-[calc(50%-4.5rem)] sm:px-8 md:px-14 lg:px-20 bg-indigo-300 dark:bg-indigo-300 dark:text-indigo-800 hover:text-indigo-300 hover:bg-transparent hover:border-indigo-300 dark:hover:text-indigo-300 dark:hover:bg-transparent dark:hover:border-indigo-300"
				/>
			</div>
		</div>
	</div>
	<div class="hidden items-end w-screen sm:flex 3xl:container 3xl:mx-auto h-[100dvh]">
		<div class="z-50" />
		<ul
			out:fly={{ y: 600, duration: 500 }}
			class="relative z-40 flex justify-around w-[calc(100%-10rem)] py-6 mx-auto mb-20 text-4xl font-extralight snap-end scroll-mb-20"
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
