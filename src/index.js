const path = require('path');
const express = require('express');

/**
 * Swagger Custom Package - Express middleware
 * Provides custom CSS and JS for Swagger UI
 */
function swaggerCustom() {
  const router = express.Router();
  const assetsPath = path.join(__dirname, '../dist');

  // Serve CSS files
  router.use('/css', express.static(path.join(assetsPath, 'css')));

  // Serve JS files
  router.use('/js', express.static(path.join(assetsPath, 'js')));

  return {
    router,
    options: {
      customCssUrl: '/swagger-custom/css/swagger-custom.css',
      customJs: '/swagger-custom/js/swaggerCustom.js',
    },
  };
}

// Export both ways for compatibility
module.exports = swaggerCustom;
module.exports.default = swaggerCustom;

// Export standalone options for manual setup
module.exports.options = {
  customCssUrl: '/swagger-custom/css/swagger-custom.css',
  customJs: '/swagger-custom/js/swaggerCustom.js',
};

module.exports.assetsPath = path.join(__dirname, '../dist');
