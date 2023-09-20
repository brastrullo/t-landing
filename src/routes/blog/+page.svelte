<script>
	import { page } from '$app/stores';
	import StandardPage from '$lib/components/StandardPage.svelte'
	import BlogBGSvg from '$lib/components/images/blog.svelte'
</script>

{#key $page.url}
	<StandardPage title={$page.data.title} href={$page.data.href} mainText={$page.data.mainText} subText={$page.data.subText}>
		<BlogBGSvg />
	</StandardPage>
	<slot></slot>
{/key}