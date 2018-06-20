import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CartComponent extends Vue {
    get subtotal() {
        return 0;
    }

    get items() {
        return [];
    }
}