<script lang=ts>
	export let text:string;
	export let classNames = ''
	export let wrapperClassNames = 'my-3'
  </script>

<div class={`${wrapperClassNames}`}>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<button data-cal-link="rastrstudio/meet-brad" data-cal-config={{"layout":"month_view"}} class={`${classNames}`}>{text}</button>
</div>
