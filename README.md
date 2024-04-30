# Codestilo

Codestilo is designed to streamline your development workflow by enabling direct configuration of ESLint and Prettier settings in your project. Simplify your project setup and ensure consistent coding standards across your teams with Codestilo.

## Features

- **Direct Configuration**: Integrate ESLint and Prettier settings directly into your project.

- **Easy to Use**: Setup in seconds, and start coding with style!

## Installation

Install Codestilo into your project:

```bash
npm install codestilo --save-dev
```






**ESLint Configuration**

After installation, you can configure your project's linting by adding the following lines to your `eslint.config.js`.

```js
import { ESLINT } from 'codestilo';

export default [...ESLINT.ts]; // or other ESLint configurations in the ESLINT object

```

**Prettier Configuration**


Formatting by adding the following lines to your `prettier.config.js`.
```js
import { PRETTIER } from 'codestilo';
const config = {
  ...PRETTIER.base, // or other Prettier configurations in the PRETTIER object
};

export default config;

```

## Usage

With Codestilo configured, you can run your usual linting and formatting commands, or you can add them to your package.json scripts:

```json
"scripts": {
  "lint": "eslint .",
  "format": "prettier --write ."
}
```

Run linting and formatting with:

```bash
npm run lint
npm run format
```

# Contributing

We welcome contributions to Codestilo! Whether it's feature suggestions, bug reports, or code contributions, your help is highly appreciated.

# License

Codestilo is open-sourced software licensed under the MIT license.

# Contact

Kenji - [kenjiginjo@gmail.com](mailto:kenjiginjo@gmail.com)

Project Link: [https://github.com/kenjiginjo/codestilo](https://github.com/kenjiginjo/codestilo)
```
