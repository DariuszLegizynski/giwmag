<template>
	<article class="hero">
		<section class="hero__left">
			<!-- <img
				class="img"
				src="/images/chuttersnap-BNBA1h-NgdY-unsplash.jpeg"
				alt="one of our awesome products"
			/> -->
			<div class="hero__call-to-action">
				<CallToAction />
			</div>
		</section>
		<section class="hero__right">
			<p>Producent Regałów półkowych i wysokiego składowania</p>
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
	grid-template-columns: 3fr 2fr;

	&__left {
		background: url('/images/chuttersnap-BNBA1h-NgdY-unsplash.jpeg') no-repeat
			center;
		background-size: cover;
		height: 60rem;
	}

	&__right {
		text-align: center;

		& > p {
			height: 100%;
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			background-color: transparent;
			color: $color-white;
		}
	}

	&__call-to-action {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-end;
		height: 100%;
		padding-bottom: 12rem;
	}
}
</style>
