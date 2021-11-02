<template>
	<header class="header">
		<section>
			<img
				class="logo"
				src="/images/logo/logo_wi-mag.png"
				alt="awesome logo of the more awesome company Wi-MAG"
			/>
		</section>
		<section class="header__buttons">
			<button class="btn">OFERTA</button>
			<button class="btn">O FIRMIE</button>
			<button class="btn btn--contact">KONTAKT</button>
		</section>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../styles/scss/_variables.scss';
.header {
	position: fixed;
	width: 100vw;
	height: 4rem;
	background-color: transparent;
	z-index: 10;

	&__buttons {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}
}
.logo {
	width: 14rem;
}
.btn {
	background-color: transparent;
	color: $color-primary;
	width: 100%;
	font-size: 1.5rem;

	&:hover {
		background-color: $color-primary;
		color: $color-white;
	}

	&--contact {
		background-color: $color-reserve-5;
	}
}
</style>
