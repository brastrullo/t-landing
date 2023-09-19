<script>
	import { fade } from 'svelte/transition'
	export let title = ''
</script>

<h1
	in:fade
	out:fade={{ duration: 150 }}
	class={`z-40 fixed rotate-90 origin-top-left top-10 -left-8 sm:left-0 sm:text-8xl text-6xl translate-x-[5.25rem] text-black sm:text-black dark:text-white/40`}
>
	{title}
</h1>
