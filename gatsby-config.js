module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-prefetch-google-fonts`,
        options: {
          fonts: [
            {
              family: `Oswald`,
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