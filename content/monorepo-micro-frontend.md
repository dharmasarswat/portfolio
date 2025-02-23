---
title: "Setting Up a Monorepo Micro Frontend Project with React: Best Practices and Tools"
date: "2025-02-22"
excerpt: "Learn how to set up a scalable and maintainable micro frontend project using a monorepo architecture with React, Webpack Module Federation, and other industry-best tools."
---

# Setting Up a Monorepo Micro Frontend Project with React: Best Practices and Tools

*Posted on February 22, 2025*

As applications grow in complexity, **Micro Frontends** have emerged as a powerful solution to scale large front-end applications by breaking them into smaller, independently deployable modules. Pairing Micro Frontends with a **Monorepo** architecture allows for seamless code sharing and improved maintainability.

In this guide, we'll walk through setting up a **Monorepo-based Micro Frontend architecture** using **React, Webpack Module Federation, TypeScript, and Yarn Workspaces**, incorporating best practices for scalability, performance, and maintainability.

---

## Why Choose Micro Frontends with a Monorepo?

### Benefits of Micro Frontends
- **Independent Deployment:** Teams can deploy parts of the application separately.
- **Technology Agnostic:** Different Micro Frontends can be built with different frameworks (though we’ll use React).
- **Better Team Autonomy:** Teams can work independently on different modules.

### Why Monorepo?
- **Code Sharing:** Reusable components and utilities are easily shared across Micro Frontends.
- **Consistent Dependency Management:** All packages use the same dependency versions.
- **Easier Refactoring:** Centralized code simplifies global refactors and upgrades.

---

## Project Setup: Tools and Technologies

| Tool/Technology                     | Purpose                              |
|-------------------------------------|--------------------------------------|
| **React**                           | UI Framework                         |
| **Webpack Module Federation**       | Enables Micro Frontend communication |
| **Yarn Workspaces**                 | Monorepo package management          |
| **TypeScript**                      | Static typing and maintainability    |
| **ESLint & Prettier**               | Enforces code quality and formatting |
| **Jest & React Testing Library**    | Unit testing                         |
| **Storybook**                       | UI component development             |
| **CI/CD (GitHub Actions)**          | Automated deployment pipeline        |

---

## Step 1: Initialize the Monorepo

We’ll use **Yarn Workspaces** to manage multiple packages inside a single repository.

### 1. Create the Monorepo

Run the following command to initialize the workspace:

```sh
mkdir microfrontend-monorepo && cd microfrontend-monorepo
yarn init -y
```

### 2. Configure Yarn Workspaces

Edit the root `package.json` to include:

```json
{
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

- **apps/**: Contains individual Micro Frontend applications.
- **packages/**: Contains shared components and utilities.

---

## Step 2: Create Micro Frontends

### 1. Create Two Micro Frontend Applications

Inside the monorepo, create two apps:

```sh
mkdir -p apps/shell apps/dashboard
```

### 2. Initialize Each App

For each app, initialize a React project with TypeScript. For example, for the `shell` app:

```sh
cd apps/shell
yarn create react-app . --template typescript
```

Repeat the same steps for the `dashboard` app.

---

## Step 3: Configure Webpack Module Federation

### 1. Install Webpack Dependencies

Inside each app directory (both `shell` and `dashboard`), run:

```sh
yarn add webpack webpack-cli webpack-dev-server @module-federation/webpack-module-federation-plugin -D
```

### 2. Setup Module Federation in the Shell App

Create a `webpack.config.js` file in `apps/shell` with the following content:

```js
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        dashboard: "dashboard@http://localhost:3001/remoteEntry.js",
      },
    }),
  ],
};
```

### 3. Setup Module Federation in the Dashboard App

Create a `webpack.config.js` file in `apps/dashboard` with the following content:

```js
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  devServer: {
    port: 3001,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "dashboard",
      filename: "remoteEntry.js",
      exposes: {
        "./Dashboard": "./src/components/Dashboard",
      },
    }),
  ],
};
```

### 4. Load the Dashboard Micro Frontend in the Shell App

In the `apps/shell/src/App.tsx` file, modify the code to lazy-load the Dashboard component:

```tsx
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("dashboard/Dashboard"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;
```

---

## Step 4: Share Dependencies Using Yarn Workspaces

To ensure that both apps use the same instance of React, update the `package.json` in both `shell` and `dashboard` apps:

```json
"dependencies": {
  "react": "workspace:*",
  "react-dom": "workspace:*"
}
```

Then, from the monorepo root, run:

```sh
yarn install
```

---

## Step 5: Add Shared Components

### 1. Create a Shared UI Library

Create a shared package for UI components:

```sh
mkdir packages/ui
cd packages/ui
yarn init -y
yarn add react
```

### 2. Create a Simple Component

Inside `packages/ui`, create a component file, for example, `src/Button.tsx`:

```tsx
import React from "react";

export const Button = ({ label }: { label: string }) => {
  return <button>{label}</button>;
};
```

### 3. Expose the Component

In `packages/ui/package.json`, add:

```json
"main": "src/Button.tsx"
```

### 4. Use the Shared Component

Now you can import the Button component in both the `shell` and `dashboard` apps:

```tsx
import { Button } from "ui/Button";
```

---

## Step 6: CI/CD & Deployment Best Practices

### 1. Setup GitHub Actions

Create a workflow file at `.github/workflows/deploy.yml` with the following content:

```yaml
name: Deploy Micro Frontends
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Dependencies
        run: yarn install
      - name: Build Apps
        run: |
          yarn workspace shell build
          yarn workspace dashboard build
```

### 2. Deploy to Vercel or Netlify

- Deploy the `apps/shell` as the primary frontend.
- Deploy the `apps/dashboard` separately, ensuring that `remoteEntry.js` is accessible for the Shell app to load dynamically.

---

## Conclusion

This setup provides a **scalable, maintainable** way to manage Micro Frontends using a **Monorepo architecture** with **Yarn Workspaces** and **Webpack Module Federation**. Key takeaways:

- ✅ **Independently Deployable Micro Frontends**
- ✅ **Shared UI Components for Code Reusability**
- ✅ **Optimized Dependency Management**
- ✅ **CI/CD for Automation**

By following these best practices, you ensure **efficient collaboration, easy scaling, and a solid foundation** for future development.
