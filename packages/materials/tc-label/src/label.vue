<template>
  <div>
    <slot name="title"></slot>
    <div :class="'d-flex' + (isSpaceBetween ? ' justify-content-space-between' : '')">
      <slot name="left-content"></slot>
      <slot name="right-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
    name: 'tc-label',
    props: {
      isSpaceBetween: Boolean
    }
}
</script>
