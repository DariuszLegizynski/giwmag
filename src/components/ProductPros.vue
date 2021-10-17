<template>
	<article class="product-pros">
		<section class="product-pros__text">
			<h1>Nasze Regały</h1>
			<ul>
				<li>wykonany z najwyższą starannością, dokładny i stabilny</li>
				<li>
					sprawdzony - próby wytrzymałościowe potwierdzają deklarowane
					obciążenie
				</li>
				<li>prosty w montażu i demontażu, bezproblemowy w transporcie</li>
				<li>spełnia normy PN-78 M-78320</li>
			</ul>
		</section>
		<section>
			<img
				src="/images/wysokiego-skladowania/palet20.jpeg"
				alt="Shelves in action"
			/>
		</section>
	</article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.product-pros {
	margin: 10rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;

	&__text {
		display: grid;
		grid-template-columns: 1fr;
		align-content: center;
		justify-items: center;
	}
}
</style>
