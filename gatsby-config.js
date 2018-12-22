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
      },
      {
        resolve: 'gatsby-plugin-express',
        options: {
          output: 'config/gatsby-express.json',
        }
      },
    ]
  }