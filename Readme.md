# codemirror-hashare


Hash based sharing plugin for codemirror

## Usage

```js
// require plugin
var hashare = require("codemirror-hashare")

// Install plugin
hashare(CodeMirror)

var myCodeMirror = CodeMirror(document.body, {
  // ...
  hashare: true // enable buffer sharing
})
```

## Install

    npm install codemirror-hashare
