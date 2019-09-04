<template>
	<div>
		<FilterBar 
			v-bind:mode.sync="mode"
            v-bind:filters.sync="filters"
            v-on:resetFilters="resetFilters"
		/>
		<ShowCase 
			v-if="mode === 'showcase'"
			v-bind:items="items"
		/>
		<ListCase
			v-if="mode === 'list'"
			v-bind:items="items" 
		/>>
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
                mode: 'showcase',
                filters: {
                    rooms: null,
                    square: {
                        min: null,
                        max: null
                    }
                }
			}
		},
		methods: {
            resetFilters () {
                this.filters = {
                    rooms: null,
                    square: {
                        min: null,
                        max: null
                    }
                }
            }    
        },
		computed: {
			items () {
                let items = this.$store.state.items

                if (this.filters.rooms) {
                    items = items.filter(item => item.rooms === this.filters.rooms)
                }

                if (this.filters.square.min) {
                    items = items.filter(item => item.square >= this.filters.square.min)
                }

                if (this.filters.square.max) {
                    items = items.filter(item => item.square <= this.filters.square.max)
                }

				return items
			}
		}
	}
</script>