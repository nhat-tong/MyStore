import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import WaitCursorComponent from './wait-cursor.component.vue';
import CartComponent from '../cart/cart.component.vue';

@Component({
    components: {
        WaitCursor: WaitCursorComponent,
        Cart: CartComponent
    }
})

export default class ProductListComponent extends Vue {
    data() {
        return {
            appName: 'Product List',
            today: new Date(),
            error: '',
            isBusy: false,
            products: []
        };
    }

    created() {
        console.log('ProductListComponent is created');
    }
}