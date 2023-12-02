<script>
	import ContactButton from '$lib/components/ContactButton.svelte';
	import { fly, fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import VerticalTitleHeader from '$lib/components/VerticalTitleHeader.svelte';
	import AboutBGSvg from '$lib/images/about.svelte';
	import GithubLinkedin from '$lib/images/GithubLinkedin.svelte';

	const title = 'ABOUT';

	let ready = false;
	onMount(() => (ready = true));
</script>

<div class="w-screen element-100dvh 2xl:svg-bg-light 2xl:dark:svg-bg-dark">
	<div
		class="h-[100dvh] w-screen relative top-0 left-0 z-0 bg-white dark:bg-black overscroll-contain md:overflow-hidden 3xl:container 3xl:mx-auto overflow-y-scroll"
	>
		<section
			class="flex flex-col-reverse justify-between mt-8 sm:justify-start sm:items-end sm:pb-20 sm:h-full md:flex-row md:flex-nowrap md:pb-0 md:my-auto md:ml-20 lg:mx-4 3xl:container 3xl:mx-auto"
		>
			{#key title}
				<VerticalTitleHeader {title} />
			{/key}
			<div
				class="relative z-50 lg:static lg:z-auto flex flex-col mb-8 sm:mb-4 sm:w-auto xl:text-lg 5xl:text-xl 3xl:w-full 3xl:pl-[20%] lg:w-1/2 md:pl-10 lg:pl-20 md:my-auto md:mr-8 bg-white/80 dark:bg-black/80"
			>
				<GithubLinkedin />
				<p
					class="inline-block px-8 sm:mt-0 sm:mb-8 md:p-0 xl:max-w-none max-h-auto sm:h-min sm:max-h-[30rem] sm:max-h-auto md:max-w-[30rem]"
					in:fly={{ y: 1000, easing: quintInOut, duration: 550 }}
					out:fade
				>
					<span class="inline-block my-4 font-serif text-sm italic"
						>Welcome to v1.0 of my custom landing website which I use as an experimental coding
						playground to dabble in current technologies.</span
					>
					I'm Brad a full stack web developer from Toronto, Canada, specializing in the Frontend with
					over 5 years of experience. I got my start in the industry by landing a junior position after
					<a
						class="link disabled"
						title="Article coming soon..."
						href="https://brd.rs/coding-empowers"
						rel="noreferrer"
						target="_blank">6 months of self-teaching</a
					>. Looking back on how coding has empowered me, I am looking to do the same through
					<a
						class="link disabled"
						title="learn.rastr.studio coming soon..."
						href="https://learn.rastr.studio"
						rel="noreferrer"
						target="_blank">teaching</a
					>. When I am not working on a creative project you can find me biking. I run a personal
					blog at
					<a
						class="link disabled"
						title="Blog coming soon..."
						href="https://brd.rs"
						rel="noreferrer"
						target="_blank">brd.rs</a
					> which is under-construction at the moment.
				</p>
				<div
					in:fly={{ delay: 150, y: 300, easing: quintInOut, duration: 550 }}
					out:fade
					class="flex justify-center md:justify-start"
				>
					<ContactButton
						classNames="5xl:text-2xl font-bold transition drop-shadow border border-transparent hover:border-red-400 py-6 px-[calc(50vw-4rem)] sm:px-20 bg-indigo-200 dark:bg-indigo-400 bg-indigo-300 text-indigo-800 hover:bg-transparent dark:hover:bg-transparent hover:text-red-400 dark:hover:text-red-400 hover:text-red-400 hover:bg-transparent hover:border-red-400 z-40"
					/>
				</div>
			</div>
			<div
				class="flex overflow-hidden overscroll-contain my-auto sm:ml-0 sm:w-full md:mx-auto md:max-h-full max-h-[50vh] lg:max-w-[50vw]"
			>
				<div
					class="object-cover overflow-hidden overscroll-contain mx-auto bg-white bg-cover opacity-70 sm:w-full dark:bg-black dark:opacity-50 w-[130vw]"
				>
					<AboutBGSvg />
				</div>
			</div>
		</section>
	</div>
</div>

<style lang="postcss">
	.disabled {
		pointer-events: none;
		color: #4338ca;
	}
	/* .link {
		color: #f87171;
	}
	.link:hover {
		text-decoration: underline;
	} */
</style>
