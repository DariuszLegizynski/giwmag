<template>
	<article class="hero">
		<section class="hero__left">
			<button class="btn">
				<span class="hero__btn">Regały Półkowe</span>
				<img
					class="img"
					src="/images/chuttersnap-BNBA1h-NgdY-unsplash.jpeg"
					alt="one of our awesome products"
				/>
			</button>
			<div class="hero__call-to-action">
				<CallToAction />
			</div>
		</section>
		<section class="hero__right">
			<button class="btn">
				<span class="hero__btn">Regały wysokiego składowania</span>
				<img
					class="img"
					src="/images/chuttersnap-BNBA1h-NgdY-unsplash.jpeg"
					alt="one of our awesome products"
				/>
			</button>
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
@import '../styles/scss/_variables.scss';
.hero {
	margin-bottom: 10rem;
	display: grid;
	grid-template-columns: 1fr 1fr;

	&__left {
		position: relative;
	}

	&__right {
		position: relative;
	}

	&__btn {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: $color-white;
		font-size: 4rem;
		background-color: $color-primary;
	}

	&__call-to-action {
		position: absolute;
		bottom: 10%;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
