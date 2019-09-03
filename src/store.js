import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const generate = () => Array.from({ length: 6 }, (item, index) => ({
    id: index + 1,
    vendorCode: 'ГЕН-112',
    rc: { label: 'ЖК Генеральский', address: 'url' + index},
    building: 15,
    floor: 4,
    rooms:[1, 2, 3, 7, 8, 12, 4][index],
    square: [50, 40, 120, 45, 23, 66][index],
    ppsm: 2304,
    seller: 'Застройщик',
    favorite: false,

    get price () {
      return this.squere + this.ppsm
    }
  }))

export default new Vuex.Store({
  state: {
    items: generate()
  },
  mutations: {
    setFavoriteState (state, itemId) {
      const item = state.items.find(x => x.id === itemId)
      item.favorite = !item.favorite
    }
  },
  actions: {
    likeHandler (store, itemId) {
      store.commit('setFavoriteState', itemId)
    }
  }
})
