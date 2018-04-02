# Getting Started

Here you will find what is needed to get started.

## Install Package

First things first. Install the package `react-rasta` with *yarn* or *npm*.

When using *yarn* it looks like this.

```powershell
yarn add react-rasta
```

And when using *npm* it looks like this.

```powershell
npm install react-rasta
```

## Basic Example

Here is a quick and basic example.

```tsx
//App.tsx
import * as React from 'react';
import { Column, Container, Row } from 'react-rasta';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Column size={3}>
                        Left
                    </Column>
                    <Column size={{ 'xs': 6, 'md': 3 }}>
                        Middle 1
                    </Column>
                    <Column size={{ 'xs': 6, 'md': 3 }}>
                        Middle 2
                    </Column>
                    <Column size={3}>
                        Right
                    </Column>
                </Row>
            </Container>
        );
    }
}
```