const copy = require('rollup-plugin-copy');
const { terser: rollupTerser } = require('rollup-plugin-terser');
const csso = require('csso');
const { minify: terserMinify } = require('terser');

const fileHeader = `
/*!
==========================================================
* Swagger Custom Package v1.0.6
* Author: Jasurbek Haydarov (jas-kha)
* GitHub: https://github.com/jas-kha/swagger-custom
* Documentation: https://github.com/jas-kha/swagger-custom#readme
* Description: Custom CSS & JS injector for Swagger UI
*              Supports dynamic JS components and custom themes.
* Build: Auto-generated using Rollup
* License: MIT
* Copyright (c) 2025-2026 Jasurbek Haydarov Baxtiyorovich
* JK Project
==========================================================
*/
`;

module.exports = [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'auto',
      fileHeader,
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
              fileHeader + '\n' + csso.minify(contents.toString()).css,
          },
          {
            src: 'src/js/swaggerCustom.js',
            dest: 'dist/js',
            transform: async (contents) => {
              const result = await terserMinify(contents.toString());
              return fileHeader + '\n' + result.code;
            },
          },
        ],
      }),
    ],
  },
];
