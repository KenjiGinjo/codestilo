### A base TSConfig for working with Bun.

Add the package to your `"devDependencies"`:

```sh
npm install --save-dev codestilo-ts
```

Add to your `tsconfig.json`:

```json
"extends": "codestilo-ts/bun.json"
```

---

The `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "lib": ["ESNext"],
    "target": "ESNext",
    "module": "ESNext",
    "moduleDetection": "force",
    "jsx": "react-jsx",
    "allowJs": true,

    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "noEmit": true,

    "strict": true,
    "skipLibCheck": true,
    "noFallthroughCasesInSwitch": true,

    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noPropertyAccessFromIndexSignature": true
  }
}

```
