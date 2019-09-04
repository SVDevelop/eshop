import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const generate = () => Array.from({ length: 6 }, (item, index) => ({
    id: index + 1,
    vendorCode: 'ГЕН-112.4.2-56',                                 //артикул
    rc: { label: 'ЖК Генеральский', address: 'url' + index},      //комплекс
    building: 15,                                                 //корпус
    floor: 4,                                                     //этаэ
    rooms:[1, 2, 3, 7, 8, 12, 4][index],                          //комнат
    square: [50, 40, 120, 45, 23, 66][index],                     //площадь
    ppsm: 2304,                                                   //щена за м2
    seller: 'Застройщик',                                         //продавец
    favorite: true,                                               //избранное

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
