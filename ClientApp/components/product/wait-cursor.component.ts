import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class WaitCursorComponent extends Vue {
    @Prop({ default: '' })
    message: string;
    @Prop({ default: true })
    busy: boolean;
}