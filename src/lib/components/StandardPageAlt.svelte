<script>
	import { fade } from 'svelte/transition'
	import VerticalTitleHeader from './VerticalTitleHeaderAlt.svelte'
  import { onMount } from 'svelte';

  let ready = false;
  onMount(() => ready = true);

  export let title = ''
  export let href = ''
  export let mainText = ''
  export let subText = ''
</script>

<VerticalTitleHeader {title} />
<div class="flex overflow-x-hidden absolute top-0 left-0 flex-col justify-between w-screen h-screen bg-white sm:overflow-y-hidden dark:bg-black">
  {#if ready}
    <h2 transition:fade class="block relative right-0 z-30 my-auto mr-4 ml-16 font-serif text-3xl italic text-right sm:ml-24 sm:w-1/2 sm:text-4xl sm:text-left sm:max-w-1/2">{subText}</h2>
    <section
      class="flex flex-col justify-end items-center sm:flex-row sm:justify-center md:justify-start"
    >
      <div class="ml-10 opacity-20 dark:opacity-20 transition absolute top-[10vh] sm:-right-[50%] md:-right-[80%] w-[130vw] max-h-[90vh] overflow-x-hidden">
        <div
          transition:fade
          class="bg-white dark:bg-black"
        >
          <slot />
        </div>
      </div>
      <div
        transition:fade
        class="flex flex-col mt-auto sm:absolute sm:bottom-[5%] sm:left-0 z-40 bg-white/80 dark:bg-black/60 dark:border-t dark:sm:border dark:border-gray-900 sm:shadow-xl sm:rounded-xl sm:mx-10 md:ml-24 min-h-max max-w-screen sm:max-w-[40rem]"
      >
        <p class="relative p-6 sm:pb-2">{mainText}</p>
        <a
          rel="noreferrer"
          {href}
          target="_blank"
          class={`inline-block w-[calc(100%-2rem)] sm:w-60 text-center mx-4 my-4 px-6 py-4 border border-transparent font-medium bg-indigo-400 text-indigo-600 hover:bg-transparent hover:border-indigo-400  hover:text-indigo-400`}
          >VISIT SITE</a
        >
      </div>
    </section>
  {/if}
</div>