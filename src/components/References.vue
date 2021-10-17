<template>
	<article class="references">
		<h1>Referencje</h1>
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
