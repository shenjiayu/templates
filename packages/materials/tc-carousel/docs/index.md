# Carousel

## Basic usage

```html
<template>
  <tc-carousel :data="data"></tc-carousel>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
      };
    },
  };
</script>

<style>
  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
</style>
```

## Advanced usage

```html
<template>
  <div class="broadcast">
    <tc-icon type="radio"></tc-icon>
    <tc-carousel :data="data" :controls="false" :indicators="false" :interval="5000" direction="up"></tc-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            id: 1,
            message: 'Rolling broadcast message',
            content: (createElement, content, context) => {
              return createElement('a', {
                attrs: {
                  href: '#',
                },

                class: 'broadcast-content',
              }, [
                createElement('span', [`${content.message} ${content.id}`]),
                createElement('tc-icon', {
                  props: {
                    size: 16,
                    type: 'chevron-right',
                  },
                }),
              ]);
            },
          },
          {
            id: 2,
            message: 'Rolling broadcast message',
            content: (createElement, content, context) => {
              return createElement('a', {
                attrs: {
                  href: '#',
                },

                class: 'broadcast-content',
              }, [
                createElement('span', [`${content.message} ${content.id}`]),
                createElement('tc-icon', {
                  props: {
                    size: 16,
                    type: 'chevron-right',
                  },
                }),
              ]);
            },
          },
          {
            id: 3,
            message: 'Rolling broadcast message',
            content: (createElement, content, context) => {
              return createElement('a', {
                attrs: {
                  href: '#',
                },

                class: 'broadcast-content',
              }, [
                createElement('span', [`${content.message} ${content.id}`]),
                createElement('tc-icon', {
                  props: {
                    size: 16,
                    type: 'chevron-right',
                  },
                }),
              ]);
            },
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .broadcast {
    border: 1px solid #eee;
    border-radius: .25rem;
    display: flex;
    padding: .5rem .75rem;
  }

  .broadcast .tc-icon {
    margin-right: .5rem;
  }

  .broadcast .tc-carousel {
    flex: 1;
  }

  .broadcast-content {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
</style>
```

## Directions

```html
<template>
  <tc-container>
    <tc-row>
      <tc-col>
        <tc-carousel :data="data"></tc-carousel>
      </tc-col>
      <tc-col>
        <tc-carousel :data="data" direction="right"></tc-carousel>
      </tc-col>
    </tc-row>
    <tc-row>
      <tc-col>
        <tc-carousel :data="data" direction="up"></tc-carousel>
      </tc-col>
      <tc-col>
        <tc-carousel :data="data" direction="down"></tc-carousel>
      </tc-col>
    </tc-row>
  </tc-container>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          {
            content: this.content,
          },
          {
            content: this.content,
          },
          {
            content: this.content,
          },
        ],
      };
    },

    methods: {
      content(createElement, content, context) {
        return createElement('div', {
          class: 'example-slide',
        }, [`Slide ${context.direction}`]);
      },
    },
  };
</script>

<style scoped>
  .tc-col {
    padding: .5rem;
  }
</style>
```

## Controls

### Without controls

```html
<template>
  <tc-carousel :data="data" :controls="false"></tc-carousel>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
      };
    },
  };
</script>
```

### Static controls

```html
<template>
  <tc-carousel :data="data" :controls="true"></tc-carousel>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
      };
    },
  };
</script>
```

## Indicators

### Without indicators

```html
<template>
  <tc-carousel :data="data" :indicators="false"></tc-carousel>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
      };
    },
  };
</script>
```

### Show indicators on hover

```html
<template>
  <tc-carousel :data="data" indicators="hover"></tc-carousel>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
      };
    },
  };
</script>
```

### Indicator Triggers

```html
<template>
  <tc-container>
    <tc-row>
      <tc-col>
        <tc-carousel :data="data"></tc-carousel>
      </tc-col>
      <tc-col>
        <tc-carousel :data="data" indicator-trigger="hover"></tc-carousel>
      </tc-col>
    </tc-row>
  </tc-container>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
      };
    },
  };
</script>

<style scoped>
  .tc-col {
    padding: .5rem;
  }
</style>
```

### Indicator types

```html
<template>
  <tc-container>
    <tc-row>
      <tc-col>
        <tc-carousel :data="data"></tc-carousel>
      </tc-col>
      <tc-col>
        <tc-carousel :data="data" indicator-type="disc"></tc-carousel>
      </tc-col>
    </tc-row>
  </tc-container>
</template>

<script>
  export default {
    data() {
      return {
        data: [
          '<div class="example-slide">Slide 1</div>',
          '<div class="example-slide">Slide 2</div>',
          '<div class="example-slide">Slide 3</div>',
        ],
      };
    },
  };
</script>

<style scoped>
  .tc-col {
    padding: .5rem;
  }
</style>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| autoplay | `Boolean` | `true` | - | Indicates if play the slides automatically once mounted. |
| controls | `Boolean` \| `String` | `true` | false, true, 'hover' | Whether to show or how to show the prev and next controls. |
| data | `Array` | - | - | The slides data of the carousel. |
| indicators | `Boolean` \| `String` | `true` | false, true, 'hover' | Whether to show or how to show the indicators. |
| indicator-trigger | `String` | `'click'` | click, hover | The trigger to activate the indicator. |
| indicator-type | `String` | `'line'` | line, disc | The style type of the indicator. |
| interval | `Number` | `5000` | - | The amount of time to delay between automatically cycling an item. |
| tag | `String` | `'div'` | - | The element tag of the carousel container. |

The array structure of `data`:

```js
[
  // Text
  'slide content',

  // HTML
  '<div>slide content</div>',

  // Vue component
  {
    template: '<div>slide content</div>',
  },

  /**
   * Render function which returns VNode.
   * @param createElement - The function for creating element.
   * @param content - The current slide content.
   * @param context - The current carousel instance.
   */
  function (createElement, content, context) {
    return createElement('div', ['slide content']);
  },

  // Object with `content` property
  {
    /**
     * The content of the slide.
     * Supports text, HTML, Vue component or render function which returns VNode.
     * @type {string|Object|Function}
     */
    content: 'slide content',

    // ...
  },
]
```

## Methods

| Name | Parameters | Description |
| --- | --- | --- |
| play | `()` | Play the carousel. Run automatically when the `autoplay` prop is set to `true`. |
| stop | `()` | Stop the carousel. |
| prev | `()` | Switch to the previous slide. |
| next | `()` | Switch to the next slide. |
| slideTo | `(index)` | Switch to the slide of the given index. |
