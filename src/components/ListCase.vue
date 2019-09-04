<template>
    <div>
        <div class="panels-wrapper">
			<div class="container p-0">
				<div class="panels-filter">
					<div class="panels-filter__element" style="width: 120px;">
						<div class="panels-filter__name">Артикул</div>
					</div>
					<div class="panels-filter__element" style="width: 160px;">
						<div class="panels-filter__name">ЖК</div>

					</div>
					<div class="panels-filter__element" style="width: 70px;">
						<div class="panels-filter__name">Корпус</div>

					</div>
					<div class="panels-filter__element" style="width: 70px;">
						<div class="panels-filter__name">Этаж</div>

					</div>
					<div class="panels-filter__element" style="width: 70px;">
						<div class="panels-filter__name">Комнат</div>
					</div>
					<div class="panels-filter__element" style="width: 80px;">
						<div class="panels-filter__name">Площадь</div>

					</div>
					<div class="panels-filter__element" style="width: 100px;">
						<div class="panels-filter__name">м2</div>

					</div>
					<div class="panels-filter__element" style="width: 100px;">
						<div class="panels-filter__name">Стоимость</div>
					</div>
					<div class="panels-filter__element" style="width: 120px;">
						<div class="panels-filter__name">Продавец</div>
					</div>
					<div class="panels-filter__element" style="width: 100px;">
						<div class="panels-filter__name">Избранное</div>
					</div>
				</div>

				<div class="panel" v-for="item of items">
					<div class="panel__artikul">ГЕН-112.4.2-56</div>
					<div class="panel__name">
						<!-- <a href="#">ЖК Генеральский</a> -->
						<router-link :to="`/product/${item.id}`">{{ item.rc.label }}</router-link>
					</div>
					<div class="panel__block">15</div>
					<div class="panel__floor">4</div>
					<div class="panel__rooms">{{ item.rooms }}</div>
					<div class="panel__sq">{{ item.square }} м2</div>
					<div class="panel__price-per-m">{{ item.ppsm }} ₽</div>
					<div class="panel__price">{{ item.ppsm * item.square }} ₽</div>
					<div class="panel__seller">Застройщик</div>
					<div class="panel__favourite">
						<button 
							class="panel__favourite-btn"
							v-bind:class="{'panel__favourite-btn--active': item.favorite}"
							v-on:click="$store.dispatch('likeHandler', item.id)"
						>
							<i class="fas fa-heart"></i>
						</button>
					</div>
				</div>

			</div>
		</div>
    </div>
</template>

<script>
    export default {
      props: ['items']  
    }
</script>
