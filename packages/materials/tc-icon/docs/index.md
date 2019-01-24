# Icon

> Icon builds in the [Feather](https://feathericons.com/) for icons.

## Icons

```html
<template>
  <p>
    <tc-input placeholder="Search icons..." @input="input" :value="keyword"></tc-input>
  </p>
  <ul class="icons">
    <li v-for="icon in icons" :key="icon">
      <tc-icon :type="icon"></tc-icon>
      <span>{{ icon }}</span>
    </li>
  </ul>
</template>

<script>
  import feather from 'feather-icons';

  const icons = Object.keys(feather.icons);

  export default {
    data() {
      return {
        icons,
        keyword: '',
      };
    },

    methods: {
      input(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.filter(event.target.value);
        }, 300);
      },

      filter(value) {
        value = value.trim().toLowerCase();
        this.icons = icons.filter(icon => icon.indexOf(value) !== -1);
        this.keyword = value;
      },
    },
  };
</script>

<style scoped>
  .icons {
    display: grid;
    grid-gap: .5rem;
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .icons > li {
    background-color: #f8f8f8;
    padding: .5rem 1rem;
    transition: color .15s;
  }

  .icons > li:hover {
    color: #0074d9;
  }

  .icons > li > .tc-icon {
    vertical-align: middle;
  }

  .icons > li > span {
    color: gray;
    margin-left: .5rem;
    transition: color .15s;
  }

  .icons > li:hover > span {
    color: inherit;
  }
</style>
```

## Colors

```html
<template>
  <div>
    <tc-icon type="star" stroke="red"></tc-icon>
    <tc-icon type="star" stroke="green"></tc-icon>
    <tc-icon type="star" stroke="blue"></tc-icon>
    <tc-icon type="star" stroke="none" fill="red"></tc-icon>
    <tc-icon type="star" stroke="none" fill="green"></tc-icon>
    <tc-icon type="star" stroke="none" fill="blue"></tc-icon>
    <tc-icon type="star" stroke="red" fill="red"></tc-icon>
    <tc-icon type="star" stroke="green" fill="green"></tc-icon>
    <tc-icon type="star" stroke="blue" fill="blue"></tc-icon>
  </div>
</template>
```

## Sizes

```html
<template>
  <div>
    <tc-icon type="star"></tc-icon>
    <tc-icon type="star" size="36"></tc-icon>
    <tc-icon type="star" size="48"></tc-icon>
    <tc-icon type="star" size="36px"></tc-icon>
    <tc-icon type="star" size="1.5rem"></tc-icon>
  </div>
</template>
```

## Weights

```html
<template>
  <div>
    <tc-icon type="star" stroke-width="1"></tc-icon>
    <tc-icon type="star"></tc-icon>
    <tc-icon type="star" stroke-width="3"></tc-icon>
  </div>
</template>
```

## Animated Icons

```html
<template>
  <div>
    <tc-icon type="loader" animation="rotation"></tc-icon>
    <tc-icon type="rotate-cw" animation="rotation"></tc-icon>
    <tc-icon type="refresh-cw" animation="rotation"></tc-icon>
    <tc-icon type="settings" animation="rotation"></tc-icon>
    <tc-icon type="sun" animation="rotation"></tc-icon>
    <tc-icon type="compass" animation="rotation"></tc-icon>
  </div>
</template>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| animation | `String` | - | rotation | The animation type of the icon. |
| type | `String` | - | Check out [the Feather website](https://feathericons.com/) for all available icons. | The type of the icon. |
| size | `Number` \| `String` | `24` | - | The size of the icon. Set both width and height of the icon. |
| fill | `String` | `'none'` | - | The fill color of the icon. Read [more](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/fill). |
| stroke | `String` | `'currentColor'` | - | The stroke color of the icon. Read [more](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke). |
| stroke-width | `Number` \| `String` | `2` | - | The stroke width of the icon. Read [more](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-width). |
| stroke-linecap | `String` | `'round'` | butt, round, square | Specifies the shape to be used at the end of open subpaths when they are stroked. Read [more](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap). |
| stroke-linejoin | `String` | `'round'` | miter, round, bevel | Specifies the shape to be used at the corners of paths or basic shapes when they are stroked. Read [more](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin). |
| tag | `String` | `'i'` | - | The tag of the icon. |
