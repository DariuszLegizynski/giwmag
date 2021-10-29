<template>
	<button class="btn btn--offer">OFERTA</button>
	<button class="btn btn--contact">KONTAKT</button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '../../styles/scss/_variables.scss';
.btn {
	color: $color-white;
	font-size: 1.8rem;
	background-color: $color-reserve-3;
	padding: 0.8rem 1.8rem;
	border-radius: 3px;

	&--offer {
	}

	&--contact {
		background-color: $color-reserve-3;

		&:hover {
			background-color: $color-highlight;
		}
	}
}
</style>
