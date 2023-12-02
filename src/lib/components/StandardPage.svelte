<script lang="ts">
	import { fade } from 'svelte/transition'
	import VerticalTitleHeader from './VerticalTitleHeader.svelte'
  import { onMount } from 'svelte';
	import { page } from '$app/stores';

  let ready = false;
  onMount(() => ready = true);

  export let title = ''
  export let href = ''
  export let mainText = ''
  export let subText = ''
  export let disabled: boolean | undefined = false
</script>
<div class="w-screen overflow-y-scroll element-100dvh 2xl:svg-bg-light 2xl:dark:svg-bg-dark">
  <div class="absolute top-0 left-0 flex flex-col justify-between w-screen h-full overflow-x-hidden bg-white overscroll-contain sm:overflow-y-hidden dark:bg-black 3xl:x-center">
    {#if ready}
    <h2 transition:fade class="right-0 z-30 block pt-12 my-auto ml-16 mr-4 font-serif text-3xl italic text-right sm:ml-24 sm:w-1/2 sm:text-4xl sm:text-left sm:max-w-1/2">{subText}</h2>
    <section
      class="flex flex-col items-center justify-end sm:flex-row sm:justify-center md:justify-start"
    >
    {#key $page.url.pathname}
      <VerticalTitleHeader {title} />
    {/key}
        <div class="overflow-x-hidden overscroll-contain absolute -left-10 ml-10 opacity-20 transition sm:overflow-auto md:left-1/3 xl:left-1/2 3xl:left-1/2 dark:opacity-30 top-[10vh] w-[130vw] max-h-[90vh]">
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
            class:disabled={disabled}
            class={`inline-block w-[calc(100%-2rem)] sm:w-60 text-center mx-4 my-4 px-6 py-4 border border-transparent font-medium bg-red-400 text-red-600 hover:bg-transparent hover:border-green-400  hover:text-green-400`}
            >{`${disabled ? 'COMING SOON':'VISIT SITE'}`}</a
          >
        </div>
      </section>
    {/if}
  </div>
</div>
<style>
  .disabled {
    background-color: lightgray;
    color: darkgray;
    pointer-events: none;
  }
</style>