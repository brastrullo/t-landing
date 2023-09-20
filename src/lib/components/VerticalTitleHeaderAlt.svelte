<script>
	import { fly, fade } from 'svelte/transition'
	export let title = ''
</script>

<h1
	in:fly={{delay: 275, y: '300'}}
	out:fade={{ duration: 150 }}
	class={`fixed z-10 rotate-90 origin-top-left top-10 -left-8 sm:left-0 sm:text-8xl text-6xl translate-x-[5.25rem] text-black sm:text-black dark:text-white/40 3xl:rotate-0 3xl:left-1/3 3xl:-translate-x-1/2 3xl:top-20 3xl:font-bold 3xl:font-serif 3xl:lowercase`}
>
	{title}
</h1>