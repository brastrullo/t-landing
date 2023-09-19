<script>
	import { fly, fade } from 'svelte/transition'
	import { quintInOut } from 'svelte/easing'
	import VerticalTitleHeader from '../components/VerticalTitleHeader.svelte'
  import { onMount } from 'svelte';

  let ready = false;
  onMount(() => ready = true);

  export let title = ''
  // export let src
  export let href = ''
  export let mainText = ''
  export let subText = ''
</script>

<VerticalTitleHeader {title} />
<div class="absolute top-0 left-0 w-screen h-screen bg-white dark:bg-black">
  {#if ready}
    <section
      class="flex flex-col items-center justify-end h-screen sm:justify-center md:justify-start"
    >
      <div class="relative transition">
        <div
          transition:fade
          class="bg-cover object-cover bg-white dark:bg-black h-[calc(100vh-5rem)] sm:h-[calc(100vh-6.5rem)] w-full"
        >
          <slot />
        </div>
        <a
          in:fly={{ delay: 250 }}
          out:fade
          rel="noreferrer"
          {href}
          target="_blank"
          class="transition hover:scale-110 text-white px-10 py-4 font-semibold  absolute bottom-[80vh] sm:bottom-4 left-1/2 -translate-x-1/2 bg-black/40 hover:bg-black/40 hover:text-white/80"
          >visit</a
        >
      </div>
      <p
        in:fly={{ y: 1000, duration: 400, easing: quintInOut }}
        out:fade
        class="w-[calc(100vw)] px-8 pb-4 sm:p-0 md:w-[60vw] sm:my-4 max-h-[calc(70vh)] mb-14 sm:w-[calc(100vw-4rem)] text-center absolute sm:static first-letter:text-5xl first-letter:font-black bg-gradient-to-b from-transparent via-white/70 dark:via-black md:bg-none"
      >
        {mainText}
        <span class="block mt-2">{subText}</span>
      </p>
    </section>
  {/if}
</div>