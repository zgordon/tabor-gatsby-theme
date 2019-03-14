module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby starter site `,
    author: `@alexadark`,
    wordPressUrl: `http://alexandraspalato.com/tabor`,
  },
  __experimentalThemes: [
    {
      resolve: 'gatsby-theme-tabor',
      options: { wordPressUrl: `http://alexandraspalato.com/tabor` },
    },
  ],
};
