import { createStore } from "vuex";

export default createStore({
  //user ကရွေးတဲ့ ပစ္စည်းတွေကို cart မှာထည့်မယ်=> data
  state: {
    carts: [],
    subTotal: null,
    tax : null,
    allTotal : null
  },
  // cart ထဲမှာ တမျိုးတိုးရင် တမျိုးထည့်မယ် => mutation
  mutations: {
    addToCart(state,payload){
      state.carts.unshift(payload)
    },
    removeFromCart(state,payload){
      const count = state.carts.indexOf(payload);
      state.carts.splice(count,1);
    },
    storeCart(state){
      localStorage.setItem('carts',JSON.stringify(state.carts));
    },
    getStorageCart(state){
      if (localStorage.getItem('carts')){
        try {
          state.carts = JSON.parse(localStorage.getItem('carts'));
        }catch (error){
          localStorage.removeItem('carts');
        }
      }
    },
    calSubtotal(state){
      if (state.carts.length == 1){
        state.carts.forEach((product)=>{
          state.subTotal = product.price * product.quantity
        })
      }else if(state.carts.length > 1){
        let total = state.carts.reduce((a,b)=>{
          return a + (b.price * b.quantity);
        },0)
        state.subTotal = total
      }
    },
    allTotal(state){
      let tax = state.subTotal * 7/100;
      state.allTotal = state.subTotal + tax;
      state.tax = tax;
    }
  },
  actions: {},
  modules: {},
});
