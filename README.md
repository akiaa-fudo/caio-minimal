# Crypto All-in-one

## Cross platform desktop app to trade, transact cryptocurrencies

---

### Description

The top-level wrapper of caio-trader, caio-treasury, the two core SPAs of the GUI part of the project built in react.

### Directory structure

```bash
crypto-all-in-one
├── dist
│   └── ... // webpack output files
├── nodemon.json  // nodemon: watch list, command to exec
├── package.json
├── package-lock.json
├── README.md
├── src // all source code files
│   ├── index.html // the outmost html wrapper
│   ├── main.ts // main process for electron
│   ├── preload.ts // preload script for electron
│   ├── react //react compoents
│   │   └── app // example compoent
│   │       ├── App.sass
│   │       └── App.tsx
│   ├── renderer.sass
│   └── renderer.tsx  // the react wrapper, render process for electron
├── tsconfig.json
├── webpack.config.js
├── webpack.electron.main.js
├── webpack.electron.preload.js
└── webpack.react.js
```
