---
id: row
title: Row
---

The `Row` splits `Column` components into vertical oriented boxes. A `Row` should only contain
`Column` components to avoid appearance issues. A `Row` contains one or more `Column` components
and will break to a new line if one or more `Column` components exceed in size. Below you will see a
code example to get an idea of how it should look like.

```html
<Container>
  <Row>
    <Column />
  </Row>
</Container>
```

## Properties

All properties are optional.

| Name             | Type                                 | Description |
| ---------------- | ------------------------------------ | ----------- |
| `alignContent`   | `BreakpointValue<RowAlignContent>`   |             |
| `alignItems`     | `BreakpointValue<RowAlignItems>`     |             |
| `direction`      | `BreakpointValue<RowDirection>`      |             |
| `justifyContent` | `BreakpointValue<RowJustifyContent>` |             |
| `noGutter`       | `BreakpointValue<boolean>`           |             |
| `wrap`           | `BreakpointValue<RowWrap>`           |             |
