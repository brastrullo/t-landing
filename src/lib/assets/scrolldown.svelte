<script>
	import Chevron from '$lib/assets/chevron.svelte';
	export const className = ''
</script>
<span class="z-50 absolute bottom-14 left-1/2 -translate-x-1/2 m-auto animate-pulse text-indigo-300 text-xs">scroll</span>
<div class="fixed m-auto bottom-12 left-1/2 -translate-x-1/2 translate-y-3 flex pointer-events-none">
	<Chevron className={`relative m-auto w-5 text-indigo-300 animate-bounce`} />
</div>
