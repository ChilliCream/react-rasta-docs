---
id: installation
title: Installation
---

Here you will find what is needed to get started.

## Install Package

First things first. Install the package `react-rasta` with your preferred tool (_yarn_ or _npm_).

### Yarn

```powershell
yarn add react-rasta
```

### NPM

```powershell
npm install react-rasta
```

## Code Example

Here is a quick and basic example.

```tsx
//App.tsx
import * as React from "react";
import { Column, Container, Row } from "react-rasta";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Column size={3}>Left</Column>
          <Column size={{ xs: 6, md: 3 }}>Middle 1</Column>
          <Column size={{ xs: 6, md: 3 }}>Middle 2</Column>
          <Column size={3}>Right</Column>
        </Row>
      </Container>
    );
  }
}
```
