# Codesty

Codesty is designed to streamline your development workflow by enabling direct configuration of ESLint and Prettier settings in your `package.json`. Simplify your project setup and ensure consistent coding standards across your teams with Codesty.

## Features

- **Direct Configuration**: Integrate ESLint and Prettier settings directly into your `package.json`.
- **Consistent Standards**: Maintain coding consistency across various projects.
- **Easy to Use**: Setup in seconds, and start coding with style!

## Installation

Install Codesty into your project:

```bash
npm install codesty --save-dev
```

## Configuration

After installation, you can configure your project's linting and formatting by adding the following lines to your `package.json`:

**ESLint Configuration**

```json
"eslintConfig": {
    "extends": "codesty/eslint-config/base"
}
```

**Prettier Configuration**
  
```json
"prettier": "codesty/prettier-config/base"
```

## Usage

With Codesty configured, you can run your usual linting and formatting commands, or you can add them to your package.json scripts:

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

We welcome contributions to Codesty! Whether it's feature suggestions, bug reports, or code contributions, your help is highly appreciated.

# License

Codesty is open-sourced software licensed under the MIT license.

# Contact

Kenji - [kenjiginjo@gmail.com](mailto:kenjiginjo@gmail.com)

Project Link: [https://github.com/kenjiginjo/codesty](https://github.com/kenjiginjo/codesty)
```