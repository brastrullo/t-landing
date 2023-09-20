<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { menuToggle } from '$lib/utils/store';

  export let link = { name: '', href: ''}
  export let i = 0

</script>

<li
  transition:fly={{
    easing: quintInOut,
    x: i % 2 === 0 ? 400 : -400,
    duration: 425 - i * 5
  }}
  class={`h-full grid align-items border-b border-black/10 bg-white dark:border-white/10 dark:bg-black`}
>
  <a
    class={`transition h-full hover:scale-125 flex w-full relative`}
    href={link.href}
    on:click={menuToggle.toggle}
    ><span class="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      >{link.name}</span
    ></a
  >
</li>