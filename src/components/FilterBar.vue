<template>
    <div>
        <div class="container p-0">
			<div class="heading-1">Выбор квартир:</div>
			<div class="filter">
				<div class="filter__col">
					<div class="filter__label">Выбор проекта:</div>
					<select name="" id="" class="filter__dropdown">
						<option value="all">Все проекты</option>
						<option value="generalskij">ЖК Генеральский</option>
						<option value="petrovskij">ЖК Петровский</option>
						<option value="centralnij">ЖК Центральный</option>
					</select>
				</div>
				<div class="filter__col rooms">
					<div class="filter__label">Комнат:</div>
					<div class="rooms__wrapper">
						<input type="checkbox" id="rooms_1" class="rooms__checkbox">
							<label for="rooms_1" class="rooms__btn" v-bind:class="{'rooms__btn--active': filters.rooms === 1}" v-on:click="updateFilter('rooms', 1)">1</label>
						<input type="checkbox" id="rooms_2" class="rooms__checkbox">
							<label for="rooms_2" class="rooms__btn" v-bind:class="{'rooms__btn--active': filters.rooms === 2}" v-on:click="updateFilter('rooms', 2)">2</label>
						<input type="checkbox" id="rooms_3" class="rooms__checkbox">
							<label for="rooms_3" class="rooms__btn" v-bind:class="{'rooms__btn--active': filters.rooms === 3}" v-on:click="updateFilter('rooms', 3)">3</label>
						<input type="checkbox" id="rooms_4" class="rooms__checkbox">
							<label for="rooms_4" class="rooms__btn" v-bind:class="{'rooms__btn--active': filters.rooms === 4}" v-on:click="updateFilter('rooms', 4)">4</label>
					</div>
				</div>
				<div class="filter__col">
					<div class="filter__label">Площадь:</div>
					<div class="range__wrapper">
						<div class="range">
							<label for="" class="range__label">от</label>
							<input type="number" class="range__input" v-model="filters.square.min">
							<div class="range__value">м2</div>
						</div>
						<div class="range">
							<label for="" class="range__label">до</label>
							<input type="number" class="range__input" v-model="filters.square.max">
							<div class="range__value">м2</div>
						</div>
					</div>
				</div>
				<div class="filter__col">
					<div class="filter__label">Стоимость:</div>
					<div class="range__wrapper">
						<div class="range">
							<label for="" class="range__label">от</label>
							<input type="number" class="range__input range__input--price">
							<div class="range__value">₽</div>
						</div>
						<div class="range">
							<label for="" class="range__label">до</label>
							<input type="number" class="range__input range__input--price">
							<div class="range__value">₽</div>
						</div>
					</div>
				</div>
			</div>
			<div class="filter__buttons">
				<button class="filter__show">Показать 119 объектов</button>
				<button class="filter__reset"  v-on:click="$emit('resetFilters')">Сбросить фильтр</button>
			</div>
		</div>

		<div class="view-options-wrapper">
			<div class="container">
				<!-- view-options -->
				<div class="view-options">
					<div class="view-options__sort">
						<label for="sort-cards-by" class="view-options__label">Сортировать</label>
						<select id="sort-cards-by" name="" class="view-options__select">
							<option value="">по цене ↑</option>
							<option value="">по цене ↓</option>
							<option value="">по площади ↑</option>
							<option value="">по площади ↓</option>
						</select>
					</div>
					<div class="view-options__type">
						<a 
							href="#"
							class="view-options__type-item "
							v-bind:class="{'view-options__type-item--active': mode === 'showcase'}"
							v-on:click.prevent="$emit('update:mode', 'showcase')"
						>
							<i class="fas fa-th-large"></i>
						</a>
						<a 
                            href="#"
							class="view-options__type-item"
							v-bind:class="{'view-options__type-item--active': mode === 'list'}"
							v-on:click.prevent="$emit('update:mode', 'list')"
						>
							<i class="fas fa-bars"></i>
						</a>
					</div>
				</div>
				<!-- // view-options -->
			</div>
		</div>
    </div>
</template>

<script>
    export default {
		props: ['mode', 'filters'],
		methods: {
			updateFilter (param, value) {
				const copy = JSON.parse(JSON.stringify(this.filters))
				copy[param] = value
				this.$emit('update:filters', copy)
			}
		}
    }
</script>