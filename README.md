
# FE Components

Welcome to the FE Components repository! This guide will help you get started with our reusable component library.

## Overview

This repository contains a collection of frontend components designed to accelerate development and maintain consistency across projects.

## Getting Started

### Installation

```bash
npm install
```

### Running the Project

```bash
npm start
```

## Available Components

Browse the `src/components` directory to see all available components. Each component includes:

- **Component file** - The main component implementation
- **Example usage** - Usage examples demonstrating how to use it
- **Props documentation** - Available props and their types

## Using Components

### Basic Example

```jsx
import { Button } from './components/Button'

export default function App() {
    return <Button label="Click me" onClick={() => alert('Clicked!')} />
}
```

### Component Categories

- **UI Components** - Basic elements like buttons, inputs, cards
- **Layout Components** - Containers and grid systems
- **Utility Components** - Helpers and wrappers

## Branches & Examples

Check existing branches for feature branches that contain examples and implementation patterns for each component.

```bash
git branch -a  # View all branches
```

## Contributing

When adding new components:
1. Create a feature branch
2. Add component with examples
3. Update this README with usage instructions

## Resources

- Component stories and live examples are available in each component's folder
- Refer to existing components for code style and patterns
