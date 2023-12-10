<script>
	import LoadCalendar from './LoadCal.svelte'
	export let classNames = ''
	export let wrapperClassNames = 'my-[1.35rem] sm:my-0'
	export let text = 'contact'
</script>

<LoadCalendar
	{text}
	{wrapperClassNames}
	classNames={classNames}
/>
