<script>
	import { page } from '$app/stores';
	import StandardPage from '$lib/components/StandardPage.svelte'
	import ClientsBGSvg from '$lib/assets/clients.svelte'
</script>

{#key $page.url}
	<StandardPage title={$page.data.title} href={$page.data.href} mainText={$page.data.mainText} subText={$page.data.subText}>
		<ClientsBGSvg />
	</StandardPage>
	<slot/>
{/key}