<template>
	<article class="footer">
		<section>
			<h1>Dane Kontaktowe:</h1>
			<h3>Wi-Mag</h3>
			<p>ul. Wrocławska 12</p>
			<p>tel./fax 71 318-50-06</p>
			<p>e-mail: wimag@o2.pl</p>
		</section>
		<section class="footer__contact">
			<h3>Formularz kontaktowy</h3>
			<form>
				<div>
					<label>Imię</label>
					<input />
				</div>
				<div>
					<label>Nazwisko</label>
					<input />
				</div>
				<div>
					<label>E-mail</label>
					<input required />
				</div>
				<div>
					<label>Telefon</label>
					<input />
				</div>
				<div>
					<label>Wiadomość</label>
					<textarea />
				</div>
			</form>
			<button>Wyślij</button>
		</section>
	</article>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;

	&__contact {
		display: grid;
		grid-template-columns: 1fr;
		align-content: center;
	}
}
</style>
