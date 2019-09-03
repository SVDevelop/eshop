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

		<FilterBar 
			v-bind:mode.sync="mode"
		/>

		<!-- cards-wrapper -->
		<ShowCase 
			v-if="mode === 'showcase'"
			v-bind:items="items"
		/>
		<!-- // cards-wrapper -->

		<!-- panels-wrapper -->
		<ListCase
			v-if="mode === 'list'"
			v-bind:items="items" 
		/>>
		<!-- // panels-wrapper -->

		<!-- pagination -->
		<div class="pagination">
			<a href="#" class="pagination__link">Предыдущая</a>
			<a href="#" class="pagination__page">1</a>
			<a href="#" class="pagination__page pagination__page--active">2</a>
			<a href="#" class="pagination__page">3</a>
			<a href="#" class="pagination__page">4</a>
			<span href="#" class="pagination__dots">...</span>
			<a href="#" class="pagination__link">Следующая</a>
		</div>
		<!-- // pagination -->
		<route-view />

	</div>
</template>
<script>
	import ListCase from '@/components/ListCase'
	import ShowCase from '@/components/ShowCase'
	import FilterBar from '@/components/FilterBar'
	export default {
		components: {
			ListCase,
			ShowCase,
			FilterBar
		},
		data () {
			return {
				mode: 'showcase'
			}
		},
		methods: {},
		computed: {
			items () {
				return this.$store.state.items
			}
		}
	}
</script>