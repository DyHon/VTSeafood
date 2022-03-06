import Vue from 'vue';
import Vuex from 'vuex';
// import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoPage:[],
    cartItems:[],
    items: [
      {
        id:0,
        img: require('@/assets/Tôm càng xanh.png'),
        title: 'Tôm càng xanh sống',
        price: '415,000đ/1kg',
        pricePerUnit: 415000,
        color: 'yellow',
        type: 'tom'
      }, {
        id:1,
        img: require('@/assets/Tôm Tít Hấp Nguyên Con.jpg'),
        title: 'Tôm Tít Hấp Nguyên Con',
        price: '255,000đ/Khay 1kg',
        pricePerUnit: 255000,
        color: 'yellow',
        type: 'tom'
      }, {
        id:2,
        img: require('@/assets/Thịt Tôm Tít Size S.png'),
        title: 'Thịt Tôm Tít Size S',
        price: '145,000đ/Khay 500g',
        pricePerUnit: 145000,
        color: 'yellow',
        type: 'tom'
      }, {
        id:3,
        img: require('@/assets/Thịt Tôm Tít Size L.jpg'),
        title: 'Thịt Tôm Tít Size L',
        price: '220,000đ/Khay 500g',
        pricePerUnit: 220000,
        color: 'red',
        type: 'tom'
      }, {
        id:4,
        img: require('@/assets/Tôm Sú Sống.jpg'),
        title: 'Tôm Sú Sống',
        price: '425,000đ/1kg',
        pricePerUnit: 425000,
        color: 'white',
        type: 'tom'
      }, {
        id:5,
        img: require('@/assets/Tôm Sú Biển.jpg'),
        title: 'Tôm Sú Biển',
        price: '360,000đ/Khay 500g',
        pricePerUnit: 360000,
        color: 'white',
        type: 'tom'
      }, {
        id:6,
        img: require('@/assets/Tôm Thẻ Bóc Nõn.jpg'),
        title: 'Tôm Thẻ Bóc Nõn',
        price: '185,000đ/Khay 500g',
        pricePerUnit: 185000,
        color: 'blue',
        type: 'tom'
      }, {
        id:7,
        img: require('@/assets/Tôm Thẻ Tươi.jpg'),
        title: 'Tôm Thẻ Tươi',
        price: '120,000đ/Hộp 500g',
        pricePerUnit: 120000,
        color: 'red',
        type: 'tom'
      },
      {
        id:8,
        img: require('@/assets/Sashimi Cá Hồi 500g.png'),
        title: 'Sashimi Cá Hồi 500g',
        price: '630,000đ/Phần',
        pricePerUnit: 630000,
        color: 'white',
        type: 'ca'
      },
      {
        id:9,
        img: require('@/assets/Sashimi Cá Hồi 300g.png'),
        title: 'Sashimi Cá Hồi 300g',
        price: '370,000đ/Phần',
        pricePerUnit: 370000,
        color: 'yellow',
        type: 'ca'
      },
      {
        id:10,
        img: require('@/assets/Sashimi Cá Hồi 150g.png'),
        title: 'Sashimi Cá Hồi 150g',
        price: '185,000đ/Phần',
        pricePerUnit: 185000,
        color: 'white',
        type: 'ca'
      },
      {
        id:11,
        img: require('@/assets/Xương Cá Hồi.jpg'),
        title: 'Xương Cá Hồi',
        price: '20,000đ/Bộ',
        pricePerUnit: 20000,
        color: 'red',
        type: 'ca'
      },
      {
        id:12,
        img: require('@/assets/Đầu Cá Hồi Tươi.jpg'),
        title: 'Đầu Cá Hồi Tươi',
        price: '58,000đ/Cái',
        pricePerUnit: 58000,
        color: 'blue',
        type: 'ca'
      },
      {
        id:13,
        img: require('@/assets/Lườn Cá Hồi Tươi.jpg'),
        title: 'Lườn Cá Hồi Tươi',
        price: '55,000đ/Khay 300g',
        pricePerUnit: 55000,
        color: 'white',
        type: 'ca'
      },
      {
        id:14,
        img: require('@/assets/Trứng Cá Hồi.jpg'),
        title: 'Trứng Cá Hồi',
        price: '180,000đ/Hủ 50g',
        pricePerUnit: 180000,
        color: 'white',
        type: 'ca'
      },
      {
        id:15,
        img: require('@/assets/Cá Hồi Phi Lê Đuôi.jpg'),
        title: 'Cá Hồi Phi Lê Đuôi',
        price: '115,000đ/Khay 250g',
        pricePerUnit: 115000,
        color: 'white',
        type: 'ca'
      },
      {
        id:16,
        img: require('@/assets/Cá Hồi Phi Lê Thân.jpg'),
        title: 'Cá Hồi Phi Lê Thân',
        price: '199,000đ/Khay 250g',
        pricePerUnit: 199000,
        color: 'white',
        type: 'ca'
      },
      {
        id:17,
        img: require('@/assets/Cá Hồi Nguyên Con Tươi.jpg'),
        title: 'Cá Hồi Nguyên Con Tươi',
        price: '3,060,000đ/Con 6kg',
        pricePerUnit: 3060000,
        color: 'white',
        type: 'ca'
      },
      {
        id:18,
        img: require('@/assets/Cá Hồi Phi Lê Đông Lạnh.png'),
        title: 'Cá Hồi Phi Lê Đông Lạnh',
        price: '117,000đ/300g',
        pricePerUnit: 117000,
        color: 'white',
        type: 'ca'
      },
      {
        id:19,
        img: require('@/assets/Cá Chim Trắng Sống.jpg'),
        title: 'Cá Chim Trắng Sống',
        price: '216,000đ/Con 0,8kg',
        pricePerUnit: 216000,
        color: 'white',
        type: 'ca'
      },
      {
        id:20,
        img: require('@/assets/Cá Bống Mú Đỏ.jpg'),
        title: 'Cá Bống Mú Đỏ',
        price: '250,000đ/Con 1kg',
        pricePerUnit: 250000,
        color: 'white',
        type: 'ca'
      },
      {
        id:21,
        img: require('@/assets/Cá Bống Mú.jpg'),
        title: 'Cá Bống Mú',
        price: '220,000đ/Con 1kg',
        pricePerUnit: 220000,
        color: 'white',
        type: 'ca'
      },
      {
        id:22,
        img: require('@/assets/Cá Bống Mú Nghệ.jpg'),
        title: 'Cá Bống Mú Nghệ',
        price: '270,000đ/Con 0,8kg',
        pricePerUnit: 270000,
        color: 'white',
        type: 'ca'
      },
      {
        id:23,
        img: require('@/assets/Cá Đuối.jpg'),
        title: 'Cá Đuối',
        price: '270,000đ/1kg',
        pricePerUnit: 270000,
        color: 'white',
        type: 'ca'
      },
      {
        id:24,
        img: require('@/assets/Ốc Hương Ireland.jpg'),
        title: 'Ốc Hương Ireland',
        price: '299,000đ/Khay 1kg',
        pricePerUnit: 299000,
        color: 'white',
        type: 'oc'
      },
      {
        id:25,
        img: require('@/assets/Ốc Hương Sống.jpg'),
        title: 'Ốc Hương Sống',
        price: '245,000đ/500g',
        pricePerUnit: 245000,
        color: 'white',
        type: 'oc'
      },
      {
        id:26,
        img: require('@/assets/Ốc Mỡ.jpg'),
        title: 'Ốc Mỡ',
        price: '230,000đ/1kg',
        pricePerUnit: 230000,
        color: 'white',
        type: 'oc'
      },
      {
        id:27,
        img: require('@/assets/Ốc Móng Tay.jpg'),
        title: 'Ốc Móng Tay',
        price: '180,000đ/1kg',
        pricePerUnit: 180000,
        color: 'white',
        type: 'oc'
      },
      {
        id:28,
        img: require('@/assets/Ốc Cà Na.jpg'),
        title: 'Ốc Cà Na',
        price: '190,000đ/1kg',
        pricePerUnit: 190000,
        color: 'white',
        type: 'oc'
      },
    ]
  },
  // plugins: [createPersistedState()],
  getters: {
    itemsNumber(state){  // Cart Component
      return state.cartItems.length
    },
    totalPrice(state) { // Cart Component
      if (state.cartItems.length != 0){
       return state.cartItems.reduce((a, b) => {
         return (b.pricePerUnit == null ) ? a : a + b.pricePerUnit
       }, 0)
      }
    },
    infoLength(state) { // Info Component
      if(state.infoPage.length > 0) {
        return state.infoPage.splice(0, 1)
      }
    }
  },
  mutations: {
    inCart(state, n) { // Cart Component
      return state.cartItems.push(n)
    },
    outCart(state, n) { // Cart Component
      let index = state.cartItems.findIndex(x => x.id === n)
      return state.cartItems.splice(index, 1)
    },
    addtoInfo(state, n) { // Info Component
       return state.infoPage.push(n)
    }
  },
})
