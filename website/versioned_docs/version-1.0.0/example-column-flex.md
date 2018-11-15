---
id: version-1.0.0-example-column-flex
title: Column Flexibility
original_id: example-column-flex
---

In this example column's sizes are set to `auto` or `none` and column's flex is set to `grow`,
`shrink` or `none`. If you would like to see how it behaves during resizing, click
[here](https://6vr8k091zr.codesandbox.io/column/flex).

## Code

```html
<Container>
  <Row>
    <Column size={"none"} flex={"grow"}>
      grow grow grow grow
    </Column>
    <Column size={"auto"} flex={"shrink"}>
      shrink
    </Column>
    <Column size={"none"} flex={"none"}>
      none
    </Column>
    <Column size={"none"}>undefined</Column>
  </Row>
</Container>
```

## Preview

<iframe src="https://codesandbox.io/embed/6vr8k091zr?hidenavigation=1&initialpath=%2Fcolumn%2Fflex&view=preview" class="example" sandbox="allow-scripts allow-same-origin"></iframe>
