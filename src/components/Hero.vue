<template>
	<article class="hero">
		<section class="hero__left">
			<img
				class="img"
				src="/images/chuttersnap-BNBA1h-NgdY-unsplash.jpeg"
				alt="one of our awesome products"
			/>
			<div class="hero__call-to-action">
				<CallToAction />
			</div>
		</section>
		<section class="hero__right">
			<button class="btn">Regały Półkowe</button>
			<button class="btn">Regały wysokiego składowania</button>
		</section>
	</article>
</template>

<script>
import CallToAction from '@/components/tools/CallToAction.vue'
export default {
	components: {
		CallToAction,
	},
}
</script>

<style lang="scss" scoped>
.hero {
	margin-bottom: 10rem;
	display: grid;
	grid-template-columns: 1fr 1fr;

	&__left {
		position: relative;
	}

	&__call-to-action {
		position: absolute;
		bottom: 10%;
		left: 50%;
		transform: translateX(-50%);
	}

	&__right {
		display: grid;
		grid-template-rows: 1fr 1fr;
	}
}
</style>
