<template>
  <div class="sidebar">
    <ul class="sidebar__list">
      <li class="sidebar__item" v-for="(item, name) in list" :key="name">
        <h5 class="sidebar__heading">{{ name }}</h5>
        <ul class="sidebar__list">
          <li class="sidebar__item" v-for="route in item" :key="route.path">
            <router-link class="sidebar__link" active-class="sidebar__link--active" :to="route" exact>{{ route.meta ? route.meta.title : route.name }}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  import routes from '../router/routes';

  export default {
    computed: {
      list() {
        const components = routes.find(route => route.path === '/');
        const groups = [];
        const list = {};

        components.children.forEach((component) => {
          const group = (component.meta && component.meta.group) || 'Others';

          if (!list[group]) {
            groups.push(group);
            list[group] = [];
          }

          list[group].push(component);
        });

        const sortedList = {};

        groups.sort().forEach((group) => {
          sortedList[group] = list[group];
        });

        return sortedList;
      },
    },
  };
</script>

<style scoped>
  @import "../assets/styles/variables.css";

  @block sidebar {
    border-left: var(--border);
    color: var(--secondary-color);
    font-size: .875rem;
    padding-bottom: .5rem;
    padding-top: .5rem;

    @element list {
      list-style: none;
      margin-top: 0;
      margin-bottom: 0;
      padding-left: 0;
    }

    @element heading {
      color: color(var(--secondary-color) lightness(75%));
      font-size: inherit;
      font-weight: 400;
      margin-top: .5rem;
      margin-bottom: .25rem;
      padding-left: 1rem;
    }

    @element item {
    }

    @element link {
      border-left: 1px solid transparent;
      color: inherit;
      margin-left: -1px;
      padding-left: 2rem;
      text-decoration: none;

      &:focus,
      &:hover {
        border-left-color: var(--primary-color);
        color: var(--primary-color);
      }

      @modifier active {
        border-left-color: var(--primary-color);
        color: var(--primary-color);
      }
    }
  }
</style>
