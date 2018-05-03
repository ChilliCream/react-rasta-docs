---
id: container
title: Container
---

The `Container` is the most outer `Component` in the grid system. A `Container` should only contain
`Row` components to avoid appearance issues. Below you will see a little code example to get an idea
of how the grid system is structured.

```tsx
<Container>
  <Row>
    <Column />
  </Row>
</Container>
```

## Properties

| Name    | Type                      | Description                                                                               |
| ------- | ------------------------- | ----------------------------------------------------------------------------------------- |
| `fluid` | `boolean`                 | Determines whether the `Container` has a fixed width or fills just the complete width.    |
| `width` | `BreakpointValue<number>` | Specifies the `Container` width. This property has no effect if `fluid` is set to `true`. |
