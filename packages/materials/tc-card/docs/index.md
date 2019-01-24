# Card

## Basic usage

```html
<template>
  <tc-card>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
    <tc-button type="primary">Button</tc-button>
  </tc-card>
</template>
```

## Images

```html
<template>
  <tc-card top-image="https://dummyimage.com/320x180/999/fff" style="width: 20rem;">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</tc-card>
</template>
```

## Header (w/o icon) and footer

```html
<template>
  <tc-card>
    <div slot="header"><tc-icon type="activity"></tc-icon>Card title</div>
    <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
    <div slot="footer">
      <tc-button type="primary">Primary</tc-button>
      <tc-button type="secondary">Secondary</tc-button>
    </div>
  </tc-card>
</template>

<style scoped>
  .card-header {
    font-size: 1.5rem;
  }
</style>
```

## Sizes

```html
<template>
  <tc-row>
    <tc-col>
      <tc-card>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        <tc-button type="primary">Button</tc-button>
      </tc-card>
    </tc-col>
    <tc-col>
      <tc-card>
        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
        <tc-button type="primary">Button</tc-button>
      </tc-card>
    </tc-col>
    <tc-col>
      <tc-card>
        <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</p>
        <tc-button type="primary">Button</tc-button>
      </tc-card>
    </tc-col>
  </tc-row>
</template>

<style scoped>
  .card-header {
    font-size: 1.5rem;
  }
</style>
```

## Props

| Name | Type | Default | Options | Description |
| --- | --- | --- | --- | --- |
| bottom-image | `String` | - | - | The image in the top of the card. |
| top-image | `String` | - | - | The image in the bottom of the card. |

## Slots

| Name | Description |
| --- | --- |
| header | The custom content for the card header. |
| footer | The custom content for the card footer. |
