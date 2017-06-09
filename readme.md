eslint-config-partner
=====================

The set of configuration files for ESLint for our team.


## Installation

```
npm install @sullenor/eslint-config-partner
```


## Usage

### via package.json

Add to your `package.json` file:

```json
"eslintConfig": {
  "extends": "@sullenor/eslint-config-partner"
},
```

### via .eslintrc.json

Create file `.eslintrc.json` in your project directory with the following content:

```json
{
  "extends": "@sullenor/eslint-config-partner"
}
```

### Possible environments

- `react` — use for react, flowtype and jest.
- `server` — the default one.
- `static` — designed for es5 mostly.

Example:

```json
{
  "extends": "@sullenor/eslint-config-partner/react"
}
```


## License

> The MIT License
