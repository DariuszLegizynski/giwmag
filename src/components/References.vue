<template>
	<article class="references">
		<h1>Zaufali nam:</h1>
		<section class="references__companies">
			<img
				class="references__logo"
				src="@/assets/logo.png"
				alt="ekstra referencje"
			/>
			<img
				class="references__logo"
				src="@/assets/logo.png"
				alt="ekstra referencje"
			/>
			<img
				class="references__logo"
				src="@/assets/logo.png"
				alt="ekstra referencje"
			/>
			<img
				class="references__logo"
				src="@/assets/logo.png"
				alt="ekstra referencje"
			/>
			<img
				class="references__logo"
				src="@/assets/logo.png"
				alt="ekstra referencje"
			/>
		</section>
	</article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.references {
	margin: 10rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;

	& > h1 {
		margin-bottom: 4rem;
	}

	&__companies {
		display: flex;
		width: 100%;
		justify-content: space-evenly;
	}

	&__logo {
		width: 8rem;
	}
}
</style>
