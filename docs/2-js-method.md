# Method 2 – JS Integration

*File: `2-js-method.md`*

Use this method if your Swagger specification is inside a JavaScript file such as `swagger/index.js`.

### Installation

```bash
npm install swagger-custom swagger-ui-express express
```

### Example Setup

### If you want the same behavior inside your main server file:

```js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerCustom = require('swagger-custom');
const swaggerDocument = require('./swagger/index');

const app = express();

const custom = swaggerCustom();
app.use('/swagger-custom', custom.router);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCssUrl: custom.options.customCssUrl,
    customJs: custom.options.customJs,
    customSiteTitle: 'API Docs',
    swaggerOptions: { docExpansion: 'none' },
  })
);

app.listen(3000, () => console.log('Docs → http://localhost:3000/api-docs'));
```