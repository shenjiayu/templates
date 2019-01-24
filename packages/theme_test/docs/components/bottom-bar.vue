<template>
  <footer class="footer">
    <tc-container>
      <tc-row>
        <tc-col>Copyright &copy; {{ year }} <a href="http://xkeshi.com" target="_blank">Xkeshi</a></tc-col>
        <tc-col span="auto">Released under the <a href="http://opensource.org/licenses/MIT" target="_blank">MIT</a> License</tc-col>
      </tc-row>
    </tc-container>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear(),
      };
    },
  };
</script>

<style scoped>
  @import "../assets/styles/variables.css";

  .footer {
    border-top: var(--border);
    color: var(--secondary-color);
    font-size: .875rem;
    padding-bottom: .25rem;
    padding-top: .25rem;

    & a {
      color: inherit;

      &:focus,
      &:hover {
        color: var(--primary-color);
      }
    }
  }
</style>
