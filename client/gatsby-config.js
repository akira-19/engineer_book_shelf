require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Engineer Bookshelf`,
    description: `bookshelf`,
    author: `Iris Ohyaman`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.jsx?$|\.tsx?$/,
        exclude: /node_modules|\.cache|public/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "bookshelf",
        // This is the field under which it's accessible
        fieldName: "bookshelf",
        // URL to query from
        url: "http://localhost:8080/query",
      },
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
        documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby-*/**/*.js',
          './gatsby-node.ts',
        ],
      },
    },
  ],
};
