<template>
  <div class="tc-card" v-on="$listeners">
    <div class="tc-card__image__container" v-if="topImage">
      <img v-if="topImage" :src="topImage">
      <div class="tc-card__product__info">
          <div class="tc-card__product__title">{{ productTitle }}</div>
          <div class="tc-card__product__duration">{{ productDuration }}</div>
      </div>
    </div>
    <div class="tc-card__header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="tc-card__body" v-if="$slots.default">
      <slot></slot>
    </div>
    <div class="tc-card__footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
    <img v-if="bottomImage" :src="bottomImage">
  </div>
</template>
<script>

  export default {
    name: 'tc-card',

    props: {
      bottomImage: String,
      topImage: String,
      productTitle: String,
      productDuration: String
    },
  };
</script>
