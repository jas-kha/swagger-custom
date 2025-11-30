# Method 1 – JSON Integration

*File: `1-json-method.md`*

Use this method if your Swagger specification is defined inside a **swagger.json** file.

### Installation

```bash
npm install swagger-custom swagger-ui-express express
```

### Example Setup (app.js)

```js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerCustom = require('swagger-custom');
const swaggerDocument = require('./swagger/swagger.json');

const app = express();

// Initialize swagger-custom
const custom = swaggerCustom();

// Serve swagger-custom assets
app.use('/swagger-custom', custom.router);

// Swagger UI
app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customSiteTitle: 'My Custom API Docs',
    customCssUrl: custom.options.customCssUrl,
    customJs: custom.options.customJs,
  })
);

app.listen(3000, () => console.log('Docs → http://localhost:3000/api-docs'));
```
