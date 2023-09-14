<script>
	import { page } from '$app/stores';
	import StandardPage from '$lib/components/StandardPage.svelte'
	import SocialBGSvg from '$lib/components/images/social.svelte'
</script>

{#key $page.url}
	<StandardPage title={$page.data.title} src={$page.data.imgSrc} href={$page.data.href} mainText={$page.data.mainText} subText={$page.data.subText}>
		<div class="bg-cover object-cover bg-gray-100 dark:bg-slate-800 h-[calc(100vh-5rem)] sm:h-[calc(100vh-6.5rem)] w-full">
			<SocialBGSvg classNames={'h-full w-full'}/>
		</div>
	</StandardPage>
	<slot></slot>
{/key}