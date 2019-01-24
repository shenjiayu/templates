# Collapse

## Basic usage

```html
<template>
  <div>
    <p>
      <tc-button type="primary" :aria-expanded="expanded" aria-controls="collapse" @click="toggle">Toggle collapsible item</tc-button>
    </p>
    <tc-collapse id="collapse" :expanded="expanded">
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
    </tc-collapse>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        expanded: false,
      };
    },

    methods: {
      toggle() {
        this.expanded = !this.expanded;
      },
    },
  };
</script>
```

## Accordion

```html
<template>
  <div role="tablist">
    <div v-for="(item, index) in list" :key="index">
      <a :id="`heading${index}`" role="tab" :href="`#collapse${index}`" :data-index="index" :aria-expanded="item.expanded" :aria-controls="`collapse${index}`" @click="toggle($event, index)">Collapsible item #{{ index }}</a>
      <tc-collapse :id="`collapse${index}`" :expanded="item.expanded" role="tabpanel" :aria-labelledby="`heading${index}`">
        <p>{{ item.text }}</p>
      </tc-collapse>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        expanded: 0,
        list: [
          {
            expanded: true,
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
          },
          {
            expanded: false,
            text: 'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
          },
          {
            expanded: false,
            text: 'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.',
          },
        ],
      };
    },

    methods: {
      toggle(e, index) {
        e.preventDefault();
        this.list.forEach((item, i) => {
          if (i === index) {
            item.expanded = !item.expanded;
          } else {
            item.expanded = false;
          }
        });
      },
    },
  };
</script>
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| appear | `Boolean` | `false` | Indicates if apply transition on initial render or not. |
| expanded | `Boolean` | `false` | Indicates if the collapse element is expanded or not. |
| tag | `String` | `'div'` | The tag of the collapse element. |

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| toggle | `()` | Toggle the visibility of the collapse. |
| show | `()` | Show the collapse. |
| hide | `()` | Hide the collapse. |

## Events

| Name | Parameters | Description |
| --- | --- | --- |
| show | `()` | This event fires immediately when the `show` method is called. |
| shown | `()` | This event is fired when a collapse element has been shown completely. |
| hide | `()` | This event is fired immediately when the `hide` method has been called. |
| hidden | `()` | This event is fired when a collapse element has been hidden completely. |
