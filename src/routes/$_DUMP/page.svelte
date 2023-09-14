<script lang="ts">
  import AppImport from '$lib/components/AppImport.svelte'
  import Header from '$lib/components/HeaderTest.svelte'
</script>

<main>
  <Header />
  <div>
    <AppImport />
  </div>
</main>

<style>
  :global(body) {
    margin: 0;
  }

  main {
    margin: 2rem;
  }

  div {
    width: w-full;
    height: h-full;
    background: rgb(13, 19, 32);
    background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);

    margin: auto;
  }
</style>
