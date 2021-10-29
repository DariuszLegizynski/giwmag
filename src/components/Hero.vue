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
			<div class="img--up">
				<!-- <img
				class="img--shelf"
				src="/images/polkowy-srubowy-wiorowy/swi_wior2.jpeg"
				alt="regal polkowy"
			/> -->
				<p>Regały<br />półkowe</p>
			</div>
			<div class="img--down">
				<p>Regały<br />wysokiego<br />składowania</p>
			</div>

			<!-- <img
				src="/images/jake-nebov-gVlNW-xrAZM-unsplash.jpeg"
				alt="regal wysokiego skladowania"
			/> -->
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
@import '@/styles/scss/_general.scss';

.hero {
	margin-bottom: 10rem;
	display: grid;
	grid-template-columns: 3fr 2fr;

	&__left {
		background-image: linear-gradient(
				to right bottom,
				hsla(240, 90%, 27%, 0.2),
				hsla(240, 90%, 27%, 0.7)
			),
			url('/images/chuttersnap-BNBA1h-NgdY-unsplash.jpeg');
		background-size: cover;
		height: 60rem;
	}

	&__right {
		text-align: center;
		display: grid;
		grid-template-rows: 1fr 1fr;
	}

	&__call-to-action {
		display: flex;
		justify-content: space-evenly;
		align-items: flex-end;
		height: 100%;
		padding-bottom: 12rem;
	}
}
img {
	max-height: 30rem;
}
.img--shelf {
	object-fit: contain;
}
.img--up {
	margin: 0 0 0.5rem 1rem;
	background-image: linear-gradient(
			to right bottom,
			hsla(240, 90%, 27%, 0.4),
			hsla(240, 90%, 27%, 0.8)
		),
		url('/images/third-serving-ifZ5K80s6yU-unsplash.jpeg');
	background-size: cover;
	background-repeat: no-repeat;
	max-height: 30rem;
}
.img--down {
	margin: 0.5rem 0 0 1rem;
	background-image: linear-gradient(
			to left top,
			hsla(240, 90%, 27%, 0.4),
			hsla(240, 90%, 27%, 0.8)
		),
		url('/images/wysokiego-skladowania/palet20.jpeg');
	background-size: cover;
	background-repeat: no-repeat;
	max-height: 30rem;
}
p {
	height: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	color: $color-white;
	font-size: 3.2rem;
	line-height: 3.6rem;
}
</style>
