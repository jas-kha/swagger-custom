### app.js
```js
const express = require('express');
const swaggerLoader = require('./loaders/swagger');

const app = express();

// 1. Swagger (must come first)
swaggerLoader(app);

// 2. Other routes
// loadRoutes(app);
```

* Swagger loader → FIRST
* Routes → AFTER

### loaders/swagger.js
```js
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger/index');
const swaggerCustom = require('swagger-custom');

module.exports = function swaggerLoader(app) {
  // Init swagger-custom
  const custom = swaggerCustom();

  // Serve swagger-custom assets
  app.use('/swagger-custom', custom.router);

  // Swagger UI
  const swaggerOptions = {
    customSiteTitle: 'Yolnoma API Docs',
    customCssUrl: custom.options.customCssUrl,
    customJs: custom.options.customJs,
    swaggerOptions: {
      docExpansion: 'none',
    },
  };

  app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, swaggerOptions)
  );
};
```