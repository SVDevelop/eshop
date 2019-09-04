<template>
	<div>
		<div class="top-panel">
			<div class="top-panel__container">
				<div class="top-panel__title">интернет магазин недвижимости</div>
				<div class="top-panel__phone"><a href="tel:+8800557755">8 (800) 55-77-55</a></div>
			</div>
		</div>

		<div class="logo-wrapper">
			<div class="logo">
				<div class="logo__title">КВАДРАТНЫЙ МЕТР</div>
				<div class="logo__subtitle">купить квартиру в один клик</div>
			</div>
		</div>

		<router-view/>
		
		<div class="footer">
			<div class="contaier">
				<p>Учебный проект школы <a href="https://webcademy.ru/">WebCademy</a> с курса <a href="https://webcademy.ru/jscourse/">JavaScript разработка</a>. Проект выполнил <a href="#">Сергей Воронин</a>.</p>
			</div>
		</div>
	</div>
</template>