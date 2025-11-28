const copy = require('rollup-plugin-copy');
const { terser: rollupTerser } = require('rollup-plugin-terser');
const csso = require('csso');
const { minify: terserMinify } = require('terser');

const banner = `
/*
###############################################
 * Swagger Custom Package
 * Author: Jasur Haydarov (jas-kha)
 * Description: Custom CSS & JS injector for 
 * Swagger UI with optimized minified output.
 * Build: Auto-generated using Rollup.
 * GitHub: https://github.com/jas-kha/swagger-custom
 * Copyright(c) 2025 Yolnoma.
 * Copyright(c) 2025-2026 Jasurbek Haydarov Baxtiyorovich
 * MIT Licensed
###############################################
*/
`;

module.exports = [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'auto',
      banner,
    },
    external: ['express', 'path'], // Don't bundle Node.js modules
    plugins: [
      rollupTerser({
        format: { comments: 'some' },
      }),

      copy({
        targets: [
          {
            src: 'src/css/swagger-custom.css',
            dest: 'dist/css',
            transform: (contents) =>
              banner + '\n' + csso.minify(contents.toString()).css,
          },
          {
            src: 'src/js/swaggerCustom.js',
            dest: 'dist/js',
            transform: async (contents) => {
              const result = await terserMinify(contents.toString());
              return banner + '\n' + result.code;
            },
          },
        ],
      }),
    ],
  },
];
