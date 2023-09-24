<script>
	import Chevron from '$lib/components/images/chevron.svelte';
</script>

<div class={`c-scroll-icon absolute left-1/2 -translate-x-1/2 bottom-48 sm:bottom-20 pointer-events-none`}>
	<div class="c-scroll-icon-line-mask"><div class="c-scroll-icon-line" /></div>
	<div class="c-scroll-icon-triangle">
		<div class="c-scroll-icon-triangle-mask first">
			<div class="c-scroll-icon-triangle-line first" />
		</div>
		<div class="c-scroll-icon-triangle-mask right">
			<div class="c-scroll-icon-triangle-line right" />
		</div>
		<div class="c-scroll-icon-triangle-mask left">
			<div class="c-scroll-icon-triangle-line left" />
		</div>
		<div class="c-scroll-icon-triangle-mask last">
			<div class="c-scroll-icon-triangle-line last" />
		</div>
	</div>
</div>

<span class="z-50 absolute bottom-12 left-1/2 -translate-x-1/2 m-auto animate-pulse text-green-300 text-xs">scroll</span>
<div class="fixed m-auto bottom-12 left-1/2 -translate-x-1/2 flex pointer-events-none">
	<Chevron className={`relative m-auto w-5 text-green-300 animate-bounce`} />
</div>

<style lang="postcss">
	:root {
		--line-colour: rgb(0, 255, 98);
	}
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	.c-scroll-icon {
		width: 21px;
		height: 100px;
		transform: translate3d(-50%, 0%, 0);
		backface-visibility: hidden;
	}

	.c-scroll-icon-line-mask {
		position: relative;
		overflow: hidden;
		width: 21px;
		height: 100px;
		margin: 0 auto;
	}
	.c-scroll-icon-line {
		position: absolute;
		display: inline-block;
		width: 1px;
		height: 150px;
		border-left: 1px solid var(--line-colour);
		top: -150px;
		left: 10px;
		animation: scroll-line 3s infinite;
		transition: all cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}

	@keyframes scroll-line {
		0% {
			transform: translate3d(0, 0, 0);
		}
		40% {
			transform: translate3d(0, 185px, 0);
		}
		75% {
			transform: translate3d(0, 175px, 0);
		}
		100% {
			transform: translate3d(0, 280px, 0);
		}
	}

	.c-scroll-icon-triangle {
		position: relative;
		width: 20px;
		height: 30px;
		margin: -10px auto 0;
		animation: triangle-bounce 3s infinite;
	}

	.c-scroll-icon-triangle-mask {
		position: absolute;
	}

	.c-scroll-icon-triangle-mask.first {
		width: 40px;
		height: 5px;
		right: 0;
		overflow: hidden;
	}

	.c-scroll-icon-triangle-mask.right {
		width: 10px;
		height: 30px;
		overflow: hidden;
		right: 0;
	}

	.c-scroll-icon-triangle-mask.left {
		width: 10px;
		height: 30px;
		overflow: hidden;
		left: 1;
	}

	.c-scroll-icon-triangle-mask.last {
		width: 40px;
		height: 5px;
		overflow: hidden;
	}

	.c-scroll-icon-triangle-line {
		position: absolute;
	}

	.c-scroll-icon-triangle-line.first {
		border-bottom: 1px solid var(--line-colour);
		width: 30px;
		right: 0;
		animation: triangle-first 3s infinite;
		transition: all 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}

	.c-scroll-icon-triangle-line.right {
		border-left: 1px solid var(--line-colour);
		height: 44px;
		transform: rotate(-163deg);
		right: 5px;
		top: -6px;
		animation: triangle-right 3s infinite;
		transition: all 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}

	.c-scroll-icon-triangle-line.left {
		border-left: 1px solid var(--line-colour);
		height: 40px;
		transform: rotate(163deg);
		left: 5px;
		top: -3px;
		animation: triangle-left 3s infinite;
		transition: all 0.6s cubic-bezier(0.785, 0.135, 0.15, 0.86);
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.c-scroll-icon-triangle-line.last {
		border-bottom: 1px solid var(--line-colour);
		width: 120px;
		left: 0;
		animation: triangle-last 3s infinite;
		transition: all 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
	}

	@keyframes triangle-bounce {
		0% {
			transform: translate3d(0, -5px, 0);
		}
		50% {
			transform: translate3d(0, 5px, 0);
		}
		100% {
			transform: translate3d(0, -5px, 0);
		}
	}

	@keyframes triangle-first {
		0%,
		20% {
			transform: translate3d(-40px, 0, 0);
		}
		30%,
		80% {
			transform: translate3d(10px, 0, 0);
		}
		85%,
		100% {
			transform: translate3d(30px, 0, 0);
		}
	}

	@keyframes triangle-right {
		0%,
		25% {
			transform: rotate(-163deg) translate3d(0, 40px, 0);
		}
		40%,
		84% {
			transform: rotate(-163deg) translate3d(0, 0, 0);
		}
		90%,
		100% {
			transform: rotate(-163deg) translate3d(0, -37px, 0);
		}
	}

	@keyframes triangle-left {
		0%,
		33% {
			transform: rotate(163deg) translate3d(0, -34px, 0);
		}
		50%,
		88% {
			transform: rotate(163deg) translate3d(0, 0, 0);
		}
		95%,
		100% {
			transform: rotate(163deg) translate3d(0, 38px, 0);
		}
	}

	@keyframes triangle-last {
		0%,
		87.5% {
			transform: translate3d(-120px, 0, 0);
		}
		91% {
			transform: translate3d(-80px, 0, 0);
		}
		100% {
			transform: translate3d(45px, 0, 0);
		}
	}
</style>
