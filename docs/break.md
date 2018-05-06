---
id: break
title: Break
---

The `Break` component will split `Column` components inside the `Row` into new rows even if the
`Column` components do not exceed in size. A `Break` component should not have any children. Also
a `Break` component has no properties at all. Below you will see how it works.

```html
<Container>
  <Row>
    <Column size="3">Top</Column>
    <Break />
    <Column size="3">Bottom</Column>
  </Row>
</Container>
```

The example above will translate into the following.

```txt
|Top------|---------------------------|
|Bottom---|---------------------------|
```
