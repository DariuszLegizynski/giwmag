<template>
	<header class="header">
		<section>
			<img src="" alt="awesome logo of the more awesome company Wi-MAG" />
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
.header {
	margin-bottom: 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr;

	&__buttons {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
	}
}
</style>
