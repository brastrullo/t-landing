<script>
	import ContactButton from '$lib/components/ContactButton.svelte'
	import { fly, fade } from 'svelte/transition'
	import { quintInOut } from 'svelte/easing'
	import AbsoluteScrollText from '$lib/components/AbsoluteScrollText.svelte'
	import VerticalTitleHeader from '$lib/components/VerticalTitleHeader.svelte'
	import AboutBGSvg from '$lib/components/images/about2.svelte'
	// import About from '$lib/components/images/about.svelte';

	const imgSrc = "https://picsum.photos/seed/picsum/2000/1200.webp?w=1&p=1&blur=10"
	const lqoipSrc = "https://picsum.photos/seed/picsum/2000/1200.webp?w=1&p=1&blur=10&lqip"

	const title = 'ABOUT'

	const links = [
		{ name: 'github', url: 'https://github.com/brastrullo' },
		{ name: 'linkedin', url: 'https://linkedin.com/in/bradleyrastrullo' }
	]
</script>
<VerticalTitleHeader title={title} />
<div class="h-[calc(100vh-3.5rem)] w-screen relative top-0 left-0 z-0">
	<section
		class="md:ml-20 mx-4 sm:mt-14 mt-8 sm:pb-20 md:pb-0 flex flex-col sm:flex-row sm:items-end sm:flex-wrap md:flex-nowrap justify-end sm:justify-start"
	>
		<article
			class="md:mr-4 sm:ml-0 sm:w-full lg:max-w-[30vw] mb-4 flex flex-col h-full sm:flex-col-reverse md:flex-col"
		>
			<div
				class="links flex justify-center md:justify-end mb-1 font-thin"
				in:fly={{ x: -300, delay: 150, duration: 500 }}
				out:fade
			>
				{#each links as link, i}
					<a
						rel="noreferrer"
						href={link.url}
						target="_blank"
						class="hover:underline underline-offset-4 font-light">{link.name}</a
					>
					{#if link !== links[links.length - 1]}
						<span class="mx-2">|</span>
					{/if}
				{/each}
			</div>
			<div class="bg-cover object-cover bg-gray-100 dark:bg-slate-800 h-[calc(100vh-5rem)] sm:h-[calc(100vh-6.5rem)] w-full">
				<AboutBGSvg classNames={'h-full w-full'}/>
			</div>
			<!-- <div class="bg-cover object-cover bg-gray-200 h-[calc(100vh-5rem)] sm:h-[calc(100vh-6.5rem)] w-full">
			</div> -->
			<!-- <img
				in:fly={{ x: -1000, easing: quintInOut, duration: 650 }}
				out:fade
				src={lqoipSrc}
				data-src={imgSrc}
				class="bg-cover object-cover bg-gray-200 h-[calc(100vh-5rem)] sm:h-[calc(100vh-6.5rem)] w-full"
				loading="lazy"
				alt="Profile"
			/> -->
		</article>
		<div
			class="absolute sm:static sm:flex sm:flex-col-reverse md:flex-col w-[calc(100%-2rem)] sm:w-auto mb-8 sm:mb-4"
		>
			<div
				class="fade-text-wrapper relative flex flex-col justify-end sm:static bottom-0 sm:bg-none bg-gradient-to-b from-transparent via-neutral-400/90 neutral-400"
			>
				<p
					class="fade-text overflow-scroll md:max-w-[30rem] inline-block h-[80vh] sm:h-min max-h-[20rem] sm:max-h-[30rem] px-6 pt-20 pb-20 sm:p-0 sm:max-h-auto sm:mt-0 sm:mb-8 first-letter:text-5xl first-letter:font-black md:first-letter:text-9xl md:first-letter:font-bold"
					in:fly={{ y: 1000, easing: quintInOut, duration: 550 }}
					out:fade
				> Hi there! I'm Brad a full stack web developer from Toronto, Canada, specializing in the Frontend with over 7 years of experience. I got my start in the industry by landing a junior position after <a class="link disabled" title="Article coming soon..." href="https://brd.rs/coding-empowers" rel="noreferrer" target="_blank">6 months of self-teaching</a>. Looking back on how coding has empowered me, I am looking to do the same through <a class="link disabled" title="learn.rastr.studio coming soon..." href="https://learn.rastr.studio" rel="noreferrer" target="_blank">teaching</a>. I am a tech advocate but when I am not working on a creative project you can find me biking. I run a personal blog <a class="link disabled" title="Blog coming soon..." href="https://brd.rs" rel="noreferrer" target="_blank">brd.rs</a>.
				This is v1.0 for my website and I'll updating the links as I finish my website projects
				</p>
				<AbsoluteScrollText />
			</div>
			<div
				in:fly={{ delay: 150, y: 300, easing: quintInOut, duration: 550 }}
				out:fade
				class="flex justify-center md:justify-start"
			>
				<ContactButton classNames="font-bold transition drop-shadow text-indigo-400 border border-transparent hover:border-red-400 py-6 px-[calc(50vw-4rem)] sm:px-20 bg-indigo-200/50 dark:bg-white/30 sm:bg-indigo-300 sm:text-indigo-800 hover:bg-white/30 dark:hover:bg-transparent hover:text-red-400 dark:hover:text-red-400 sm:hover:text-red-400 sm:hover:bg-transparent sm:hover:border-red-400 z-50" />
			</div>
		</div>
	</section>
	</div>

<style lang="postcss">
	.disabled {
		pointer-events: none;
		color: #4338ca
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
