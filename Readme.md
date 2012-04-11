# File server

File server on nodejs.


## How to use

First attach `server.js` & `style.js` in your project folder.
Next, run `server.js`:

```js
node server.js
```

File `style.js` specifies the color & font style :

```js
var style = require ('./style.js');  
```

```js
console.log(style.bold+style.red+'Hello world!'+style.reset);  
```

## License 


Copyright (c) 2012 Vasiliy Shevchuk &lt;vasiliyhop@gmail.com&gt;


