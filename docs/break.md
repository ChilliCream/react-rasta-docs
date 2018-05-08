---
id: break
title: Break
---

A `Break` forces `Column`s inside a `Row` to split into new rows even if the `Column`s do not
exceed in size. A `Break` should not contain any children and has no properties at all.
Below you will see how it works.

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

<div class="example">
  <div class="container">
    <div class="row">
      <div class="column-3">Top</div>
      <div class="break"></div>
      <div class="column-3">Bottom</div>
    </div>
  </div>
</div>
