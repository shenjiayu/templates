<template>
  <div class="app">
    <top-bar></top-bar>
    <router-view></router-view>
    <bottom-bar></bottom-bar>
  </div>
</template>

<style scoped>
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
