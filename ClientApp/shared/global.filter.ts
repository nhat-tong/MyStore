import Vue from 'vue';

// https://alligator.io/vuejs/creating-custom-plugins/
const GlobalFilterPlugin = {
    install(Vue: any, options: any) {
        Vue.filter("date", function (val: Date) {
            return val.toDateString();
        });

        Vue.filter("money", function (val: any, decimalPlaces: any, symbol: any) {
            if (symbol === undefined) symbol = "$";
            if (decimalPlaces === undefined) decimalPlaces = 2;
            return symbol + val.toFixed(decimalPlaces);
        });

        Vue.mixin({
            // Anything added to a mixin will be injected into all components.
            mounted() {
                console.log('Mounted!');
            }
        });
    }
};

export default GlobalFilterPlugin;