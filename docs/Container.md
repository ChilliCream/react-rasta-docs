---
id: container
title: Container
---

The `Container` is the most outer component in the grid system. A `Container` should only contain
`Row` components to avoid appearance issues. A `Container` contains one or more `Row` components.
Below you will see a little code example to get an idea of how the grid system is structured.

```html
<Container>
  <Row>
    <Column />
  </Row>
</Container>
```

The `Container` is an optinal component. This means the following example is valid as well.

```html
<Row>
  <Column />
</Row>
```

## Properties

All properties are optional.

| Name         | Type                       | Description                                                                                                                                                                                                                                         |
| ------------ | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fluid`      | `boolean`                  | Determines whether the `Container` has a fixed width or fills the complete width. This property has no effect if `fullscreen` is set to `true`. Default value: `false`.                                                                             |
| `fullscreen` | `boolean`                  | Determinse wether the `Container` will fill the complete width and height. Default value: `false`.                                                                                                                                                  |
| `width`      | `BreakpointValues<number>` | Specifies the `Container` width. The property could be overriden by the `ThemeProvider` for consistency purposes. This property has no effect if `fluid` or `fullscreen` is set to `true`. Default value: `{ sm: 540, md: 720, lg: 960, xl: 1140 }` |
