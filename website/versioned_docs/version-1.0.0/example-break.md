---
id: version-1.0.0-example-break
title: Break
original_id: example-break
---

A `Break` forces `Column`s inside a `Row` to split into new rows even if the `Column`s do not
exceed in size.

## Code

```html
<Container>
  <Row>
    <Column size="3">Top</Column>
    <Break />
    <Column size="3">Bottom</Column>
  </Row>
</Container>
```

## Preview

<iframe src="https://codesandbox.io/embed/6vr8k091zr?hidenavigation=1&initialpath=%2Fbreak&view=preview" class="example" sandbox="allow-scripts allow-same-origin"></iframe>
