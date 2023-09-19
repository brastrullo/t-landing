<script>
	import ContactButton from '$lib/components/ContactButton.svelte';
	import { fly, fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import AbsoluteScrollText from '$lib/components/AbsoluteScrollText.svelte';
	import VerticalTitleHeader from '$lib/components/VerticalTitleHeaderAlt.svelte';
	import AboutBGSvg from '$lib/components/images/about3.svelte';
	import GithubLinkedin from '$lib/components/images/GithubLinkedin.svelte';
	// import About from '$lib/components/images/about.svelte';

	const imgSrc = 'https://picsum.photos/seed/picsum/2000/1200.webp?w=1&p=1&blur=10';
	const lqoipSrc = 'https://picsum.photos/seed/picsum/2000/1200.webp?w=1&p=1&blur=10&lqip';

	const title = 'ABOUT';

	let ready = false;
	onMount(() => (ready = true));
</script>

<VerticalTitleHeader {title} />
<div class="h-[calc(100vh-.5rem)] w-screen relative top-0 left-0 z-0 bg-white dark:bg-black md:overflow-hidden">
	<section
		class="flex flex-col-reverse justify-between mt-8 sm:h-full md:ml-20 sm:mx-4 sm:pb-20 md:pb-0 md:flex-row md:my-auto sm:items-end md:flex-nowrap sm:justify-start"
	>
		<div class="z-40 flex flex-col mb-8 sm:w-auto md:pl-10 sm:mb-4 md:mr-8 md:my-auto bg-white/80 dark:bg-black/80">
			<GithubLinkedin />
			<p
				class="md:max-w-[30rem] inline-block sm:h-min max-h-auto sm:max-h-[30rem] px-8 sm:p-0 sm:max-h-auto sm:mt-0 sm:mb-8 first-letter:text-5xl first-letter:font-black md:first-letter:text-8xl md:first-letter:font-bold"
				in:fly={{ y: 1000, easing: quintInOut, duration: 550 }}
				out:fade
			>
				Hi there! I'm Brad a full stack web developer from Toronto, Canada, specializing in the
				Frontend with over 7 years of experience. I got my start in the industry by landing a junior
				position after <a
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
				>. I am a tech advocate but when I am not working on a creative project you can find me
				biking. I run a personal blog
				<a
					class="link disabled"
					title="Blog coming soon..."
					href="https://brd.rs"
					rel="noreferrer"
					target="_blank">brd.rs</a
				>. This is v1.0 for my website and I'll updating the links as I finish my website projects.
			</p>
			<div
				in:fly={{ delay: 150, y: 300, easing: quintInOut, duration: 550 }}
				out:fade
				class="flex justify-center md:justify-start"
			>
				<ContactButton
					classNames="font-bold transition drop-shadow border border-transparent hover:border-red-400 py-6 px-[calc(50vw-4rem)] sm:px-20 bg-indigo-200 dark:bg-indigo-400 bg-indigo-300 text-indigo-800 hover:bg-transparent dark:hover:bg-transparent hover:text-red-400 dark:hover:text-red-400 hover:text-red-400 hover:bg-transparent hover:border-red-400 z-50"
				/>
			</div>
		</div>
		<div
			class="md:mx-auto sm:ml-0 sm:w-full lg:max-w-[50vw] max-h-[50vh] md:max-h-full my-auto flex overflow-hidden"
		>
			<div
				class="bg-cover object-cover opacity-70 mx-auto dark:opacity-50 bg-white dark:bg-black w-[130vw] sm:w-full overflow-hidden"
			>
				<AboutBGSvg />
			</div>
		</div>
	</section>
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
	@media (max-width: 640px) {
		.fade-text {
			-webkit-mask-image: linear-gradient(
				to bottom,
				transparent 0%,
				white 25%,
				white 75%,
				transparent 100%
			);
			mask-image: linear-gradient(
				to bottom,
				transparent 0%,
				white 25%,
				white 75%,
				transparent 100%
			);
		}
	}
</style>
