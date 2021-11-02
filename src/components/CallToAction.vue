<template>
	<h1>Regały dopasowane do Twoich potrzeb.</h1>
	<div class="cta__btns">
		<div />
		<button class="btn btn--highlight">KONTAKT</button>
		<button class="btn btn--default">OFERTA</button>
		<div />
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
h1 {
	padding: 0 5rem 4.75rem 0.5rem;
	text-align: left;
}

.cta__btns {
	display: grid;
	grid-template-rows: auto auto;
	grid-template-columns: auto auto;
	row-gap: 2rem;
}
</style>
