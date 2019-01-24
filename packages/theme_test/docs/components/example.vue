<template>
  <div class="example">
    <slot></slot>
  </div>
</template>

<style>
  @import "../assets/styles/variables.css";

  @block example {
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
    border: 1px solid #eee;
    padding: 1rem;
    position: relative;

    & + .highlight {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: 0;
    }
  }
</style>
