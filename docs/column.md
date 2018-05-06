---
id: column
title: Column
---

The `Column` component is the smallest entity within the grid system. A `Column` could consist of
any component even `Container` or `Row` components to create nested grids. Below you will see it in
action.

```html
<Container>
  <Row>
    <Column>Outer column left</Column>
    <Column>
      <Container>
        <Row>
          <Column>Inner column left</Column>
          <Column>Inner column right</Column>
        </Row>
      </Container>
    </Column>
  </Row>
</Container>
```

## Properties

All properties are optional.

| Name        | Type                               | Description |
| ----------- | ---------------------------------- | ----------- |
| `alignSelf` | `BreakpointValue<ColumnAlignSelf>` |             |
| `flex`      | `BreakpointValue<ColumnFlex>`      |             |
| `offset`    | `BreakpointValue<ColumnOffset>`    |             |
| `order`     | `BreakpointValue<ColumnOrder>`     |             |
| `size`      | `BreakpointValue<ColumnSize>`      |             |
