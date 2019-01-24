<template>
  <header class="header">
    <tc-container>
      <a class="header__brand" href="./">Eks</a>
      <nav class="header__nav">
        <a href="./">Home</a>
        <a href="https://github.com/xkeshi/eks" title="View the GitHub project">GitHub</a>
        <a href="https://github.com/xkeshi" title="About the team">About</a>
      </nav>
    </tc-container>
  </header>
</template>

<style scoped>
  @import "../assets/styles/variables.css";

  @block header {
    background-color: var(--primary-color);
    border-bottom: 1px solid #eee;
    color: white;
    line-height: 3rem;

    & > div {
      display: flex;
      justify-content: space-between;
    }

    @element brand {
      color: white;
      font-size: 1.125rem;
      text-decoration: none;
    }

    @element nav {
      & > a {
        color: white;
        opacity: .75;
        text-decoration: none;

        &:focus,
        &:hover {
          color: white;
          opacity: 1;
        }

        & + a {
          margin-left: .5rem;
        }
      }
    }
  }
</style>
