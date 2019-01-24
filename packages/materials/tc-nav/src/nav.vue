<template>
  <header class="header">
    <tc-container>
      <a class="header__brand" href="/">{{ brand }}</a>
      <div class="header__middle__nav">
        <slot name="middle-nav"></slot>
      </div>
      <div class="header__right__nav">
        <slot name="right-nav"></slot>
      </div>
    </tc-container>
  </header>
</template>

<script>
export default {
    name: 'tc-nav',
    props: {
        brand: String
    }
}
</script>
