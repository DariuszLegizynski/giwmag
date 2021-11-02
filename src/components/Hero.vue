<template>
	<article class="hero">
		<section class="hero__video">
			<video autoPlay muted loop>
				<source
					src="/videos/webm/production-ID_4294436.webm"
					type="video/webm"
				/>
				Your browser is not supported
			</video>
		</section>
		<section class="hero__call-to-action">
			<CallToAction />
		</section>
	</article>
</template>

<script>
import CallToAction from '@/components/CallToAction.vue'
export default {
	components: {
		CallToAction,
	},
}
</script>

<style lang="scss" scoped>
@import '@/styles/scss/_general.scss';

.hero {
	height: 100vh;
	// background-image: url('/images/peek-a-boo/wi-mag_bg_rev_v4_horizontal_360x640.png');
	// background-size: contain;
	// background-repeat: no-repeat;

	&__video {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
		background: $color-primary-light;
		overflow: hidden;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			z-index: 1;
			// background: $gradient-main;
			background: $gradient-secondary;
		}

		& > video {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
	&__call-to-action {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		padding-top: 6rem;
	}
}

@media only screen and (min-width: 360px) {
}
</style>
