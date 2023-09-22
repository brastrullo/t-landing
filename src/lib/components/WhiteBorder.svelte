<script>
  import { page } from '$app/stores'
  $: isHome = $page.url.pathname === '/';
</script>
<div class:hidden={!isHome} class="pointer-events-none fixed bottom-0 left-0 z-40 w-screen h-screen h-[100dvh] border-t-0 border-white dark:border-black border-b-[2.5rem] border-x-[1rem] sm:border-x-[2.5rem]  3xl:container 3xl:left-1/2 3xl:-translate-x-1/2" />