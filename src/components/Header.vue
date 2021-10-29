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
			<button class="btn">KONTAKT</button>
		</section>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../styles/scss/_variables.scss';
.header {
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: sticky;
	top: 0;
	background-color: $color-white;

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
	background-color: $color-white;
	color: $color-primary;
	width: 100%;
	font-size: 1.5rem;

	&:hover {
		background-color: $color-primary;
		color: $color-white;
	}
}
</style>
