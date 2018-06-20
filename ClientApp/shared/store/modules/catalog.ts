import _ from "lodash";
import axios from "axios";

// initial state
const state = {
    catalog: [],
    cart: []
}

// getters
const getters = {}

// mutations
const mutations = {
    setCatalog: function (state, newCatalog) {
        state.catalog = newCatalog;
    },
    addToCart: function(state, product) {
        let item = _.find(state.cart, { code: product.gtinCode });
        if(item) {
            item.quantity++;
        } else {
            state.cart.push({
                name: product.name,
                price: product.listPrice,
                quantity: 1,
                code: product.gtinCode
            });
        }
    },
    deleteCartItem: function(state, item) {
        let index = _.findIndex(state.cart, { code: item.code });
        state.cart.splice(index, 1);
    }
}

// actions
const actions = {
    loadCatalog: function(context) {
        return new Promise((resolve, reject) => {
            axios.get('/api/products')
                .then((res) => {
                context.commit(mutations.setCatalog, res.data.results);
                resolve();
            })
               .catch(() => { reject(); });
        });
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}