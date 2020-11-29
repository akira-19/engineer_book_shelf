// 'use strict'
// require('ts-node').register({
//   compilerOptions: {
//     module: 'commonjs',
//     target: 'esnext',
//   },
// })
// exports.createPages = require('./gatsby-node/index').createPages

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
 
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
 
    // Update the page.
    createPage(page)
  }
}
 