import Card from './card.vue';

export default {
  Card,

  install(Vue: any) {
    Vue.component(Card.name, Card);
  },
};
export { Card };
