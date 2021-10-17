<template>
	<article class="products-presented">
		<div class="products-presented__item">
			<img
				class="products-presented__img"
				src="/images/polkowy-srubowy-metalowy/Regal_swi_metal_1.jpeg"
				alt="regal srubowych"
			/>
			<button>Regały śrubowe</button>
		</div>
		<div class="products-presented__item">
			<img
				class="products-presented__img"
				src="/images/polkowy-zaczepowy-ciezki/startowy.jpeg"
				alt="regal srubowy zaczepowy"
			/>
			<button>Regały zaczepowe</button>
		</div>
		<div class="products-presented__item">
			<img
				class="products-presented__img"
				src="/images/ruchindra-gunasekara-GK8x_XCcDZg-unsplash.jpeg"
				alt="regal wysokiego skladowania"
			/>
			<button>Regały wysokiego składowania</button>
		</div>
	</article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.products-presented {
	margin: 10rem 0;
	display: flex;
	justify-content: space-evenly;

	&__item {
		display: grid;
		grid-template-columns: 1fr;
		align-content: center;
	}

	&__img {
		height: 30rem;
	}
}
</style>
