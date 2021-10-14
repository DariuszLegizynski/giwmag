<template>
	<article class="hero">
		<section>
			<img src="" alt="one of our awesome products" />
		</section>
		<section>
			<button>Regały Półkowe</button>
			<button>Regały wysokiego składowania</button>
		</section>
		<CallToAction />
	</article>
</template>

<script>
import CallToAction from '@/components/tools/CallToAction.vue'
export default {
	components: {
		CallToAction,
	},
}
</script>

<style lang="scss" scoped>
.hero {
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
}
</style>
