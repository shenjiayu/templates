<template>
  <tc-container tag="main">
    <tc-row :gutters="false">
      <tc-col span="md-3 lg-2" order="md-2">
        <sidebar></sidebar>
      </tc-col>
      <tc-col span="md-9 lg-10" order="md-1">
        <router-view></router-view>
      </tc-col>
    </tc-row>
  </tc-container>
</template>

<style scoped>
  .tc-container {
    flex: 1;
    overflow: auto;
  }

  .tc-row {
    height: 100%;
  }

  .tc-col {
    overflow: auto;
  }

  @media (min-width: 768px) {
    .tc-col:last-child {
      padding-right: 2rem;
    }
  }
</style>
