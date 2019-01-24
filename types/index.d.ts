declare module 'feather-icons';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module '*.md' {
  const markdown: any;
  export default markdown;
}
