<template>
	<article class="hero">
		<section>
			<img
				class="hero__img"
				src="/images/chuttersnap-BNBA1h-NgdY-unsplash.jpeg"
				alt="one of our awesome products"
			/>
		</section>
		<section class="hero__btns">
			<button>Regały Półkowe</button>
			<button>Regały wysokiego składowania</button>
		</section>
		<CallToAction />
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
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;

	&__img {
		object-fit: cover;
		width: 100%;
	}

	&__btns {
		display: grid;
		grid-template-rows: 1fr 1fr;
	}
}
</style>
