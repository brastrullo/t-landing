<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import ContactButton from '$lib/components/ContactButton.svelte';
	import WhiteBorder from '$lib/components/WhiteBorder.svelte';
	import Llo from '$lib/images/llo.svelte';
	import { onMount } from 'svelte';
	import { darkMode } from '$lib/utils/store';

	const importScrollDown = () => import('$lib/images/scrolldown.svelte');
	const importThrelteCanvas = () => import('$lib/components/ThrelteCanvas.svelte');

	let windowWidth = 0;
	let windowHeight = 0;
	let sTop;
	let inverseScrollPercentage;
	let scrollPercentage;
	let scrollElement;
	let shouldShowScrollDown;

	let ready = false;

	const colorsArr = ['text-red-400', 'text-indigo-400', 'text-green-400'];
	const navItems = ['clients', 'blog', 'social'];

	const onScroll = () => {
		sTop = scrollElement.scrollTop;
		inverseScrollPercentage =
			(scrollElement.clientHeight - scrollElement.scrollTop) / scrollElement.clientHeight;
		scrollPercentage =
			1 - (scrollElement.clientHeight - scrollElement.scrollTop) / scrollElement.clientHeight;
		shouldShowScrollDown = sTop > windowHeight * 0.4;
	};

	onMount(() => {
		setVh();
		ready = true;
	});

	const setVh = () => {
		const vh = window.innerHeight * 0.01;
		windowHeight = window.innerHeight;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		return vh;
	};
</script>

<svelte:window bind:innerWidth={windowWidth} on:resize={setVh} />
{#if ready}
	<h1 class="hidden">Home</h1>

	{#await importThrelteCanvas()}
		<div
			class:dark={$darkMode}
			out:fade={{ duration: 250 }}
			class="flex m-auto element-100dvh w-screen fixed top-0 left-0 pointer-events-none"
		>
			<Llo classNames={'m-auto text-[20rem] opacity-75'} />
		</div>
	{:then module}
		<svelte:component this={module.default}/>
	{/await}

	<div class="fixed top-0 left-0 z-50 hidden element-100dvh sm:inline">
		<div
			style:height={sTop ? `${sTop}px` : '0px'}
			class={`relative top-0 right-0 sm:w-2 bg-gradient-to-b from-red-400 via-indigo-200 to-green-200 dark:from-red-900 dark:via-indigo-800 dark:to-green-600`}
		/>
	</div>
	<WhiteBorder />
	<div
		id="scrollArea"
		bind:this={scrollElement}
		on:scroll={onScroll}
		class="fixed overflow-x-hidden bg-transparent element-100dvh overscroll-none 3xl:container 3xl:mx-auto snap-y snap-mandatory"
	>
		<div id="x" class="return-home snap-start sm:snap-align-end" />
		<div
			class="flex flex-col justify-end w-screen transition-opacity sm:flex-row sm:justify-between sm:items-end sm:p-20 3xl:container 3xl:mx-auto snap-end sm:snap-align-none"
		>
			<div class="flex flex-col justify-end element-100dvh">
				<p
					style:transform={`translate(-${sTop * 0.7 * 10}px, ${sTop}px)`}
					class={`will-change-scroll z-40 text-red-400 home-main-text text-5xl sm:text-7xl sm:max-w-80 mx-6 sm:mx-4 scroll-mb-20 md:max-w-[40rem] font-bold mb-20 sm:mb-36 sm:scroll-mb-36 md:scroll-mb-0 5xl:text-8xl`}
					in:fade
					out:fly={{ y: 300, duration: 250, easing: quintInOut }}
				>
					"I create UI, Motion Graphics and anything we can imagine.
				</p>

				{#await importScrollDown() then module}
					<div class={'sm:hidden'} style:opacity={inverseScrollPercentage} class:invisible={shouldShowScrollDown}>
						<svelte:component this={module.default} />
					</div>
				{/await}
				<!-- <Scrolldown /> -->
			</div>
			<div
				class={`element-100dvh sm:hidden sm:h-auto text-2xl flex flex-col justify-end sm:w-1/2 sm:bottom-20 sm:right-20 text-center sm:text-right pb-8 sm:pb-0 scroll-pb-15 scroll-mb-15 sm:mb-32 sm:scroll-mb-32 md:scroll-mb-0`}
			>
				<p
					class="will-change-scroll z-40 home-sub-text 5xl:text-4xl mb-[calc(25vh)] text-green-300 px-6 sm:px-0 sm:mb-4 sm:pl-4 font-light drop-shadow-2xl sm:bg-none"
					in:fade
					out:fly={{ x: 600, duration: 250, easing: quintInOut }}
				>
					A multi-disciplinary creative using JS & CSS
				</p>
				<div
					in:fade
					out:fly={{ delay: 100, x: 600, duration: 250, easing: quintInOut }}
					class="z-40 drop-shadow-2xl will-change-scroll"
				>
					<ContactButton
						wrapperClassNames="my-[1.25rem]"
						classNames="home-cta font-bold transition drop-shadow 5xl:text-3xl text-indigo-900  mix-blend-screen border border-transparent py-6 sm:py-6 px-[calc(50%-4.5rem)] sm:px-8 md:px-14 lg:px-20 bg-indigo-300 hover:text-green-300 hover:bg-transparent hover:border-green-300"
					/>
				</div>
			</div>
		</div>
		<div
			class="items-end hidden w-screen sm:flex 3xl:container 3xl:mx-auto element-100dvh sm:snap-end md:snap-align-end"
		>
			<div class="z-50" />
			<ul
				out:fly={{ y: 600, duration: 500 }}
				class="relative z-40 flex justify-around w-[calc(100%-10rem)] py-6 mx-auto mb-20 text-4xl font-extralight scroll-mb-20"
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
{/if}
