module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Ubuntu`,
              subsets: [`latin`],
            },
            {
              family: `Open Sans`,
              variants: [`400`, `700`]
            },
          ],
        },
      }
    ]
  }