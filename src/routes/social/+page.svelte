<script>
	import { page } from '$app/stores';
	import StandardPage from '$lib/components/StandardPage.svelte'
	import SocialBGSvg from '$lib/assets/social.svelte'
</script>

{#key $page.url}
	<StandardPage disabled={$page.data.disabled} title={$page.data.title} href={$page.data.href} mainText={$page.data.mainText} subText={$page.data.subText}>
		<SocialBGSvg />
	</StandardPage>
	<slot></slot>
{/key}