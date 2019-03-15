const { PageTemplateFragment } = require(`../src/templates/page/data.js`)
const pageTemplate = require.resolve(`../src/templates/page/index.js`)

const GET_PAGES = `
  # Define our query variables
  query GET_PAGES($first:Int $after:String) {
    wpgraphql {
      # Ask for pages
      pages(
          # Ask for the first XX number of pages
          first: $first

          # A Cursor to where in the dataset our query should start
          # and get items _after_ that point
          after:$after
      ) {
          # In response, we'll want pageInfo so we know if we need
          # to fetch more pages or not.
          pageInfo {
              # If true, we need to ask for more data.
              hasNextPage

              # This cursor will be used for the value for $after
              # if we need to ask for more data
              endCursor
          }
          nodes {
              uri

              # This is the fragment used for the pages Template
              ...PageTemplateFragment

          }
      }
    }
  }
  # Here we make use of the imported fragments which are referenced above
  ${PageTemplateFragment}
`

/**
 * Array to store allpagess. We make paginated requests
 * to WordPress to get allpagess, and once we have all pages,
 * then we iterate over them to create pages.
 *
 * @type {Array}
 */
const allPages = []

/**
 * We track the page number so we can output the page number to the console.
 *
 * @type {number}
 */
let pageNumber = 0

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */
module.exports = async ({ actions, graphql }) => {
  /**
   * This is the method from Gatsby that we're going
   * to use to create pages in our static site.
   */
  const { createPage } = actions

  /**
   * Fetch pages method. This accepts variables to alter
   * the query. The variable `first` controls how many items to
   * request per fetch and the `after` controls where to start in
   * the dataset.
   *
   * @param variables
   * @returns {Promise<*>}
   */
  const fetchPages = async variables => {
    /**
     * Fetch pages using the GET_PAGES query and the variables passed in.
     */
    return await graphql(GET_PAGES, variables).then(({ data }) => {
      /**
       * Extract the data from the GraphQL query results
       */
      const {
        wpgraphql: {
          pages: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      /**
       * Map over the pages for later creation
       */
      nodes &&
        nodes.map(pages => {
          allPages.push(pages)
        })

      /**
       * If there's another page, fetch more
       * so we can have all the data we need.
       */
      if (hasNextPage) {
        pageNumber++
        console.log(`fetch page ${pageNumber} of pages...`)
        return fetchPages({ first: 10, after: endCursor })
      }

      /**
       * Once we're done, return all the pages
       * so we can create the necessary pages with
       * all the data on hand.
       */
      return allPages
    })
  }

  /**
   * Kick off our `fetchPages` method which will get us all
   * the pages we need to create individual pages.
   */
  await fetchPages({ first: 10, after: null }).then(allPages => {
    /**
     * Map over the allPages array to create the
     * single pages
     */
    allPages &&
      allPages.map(page => {
        console.log(`create pages: ${page.uri}`)
        createPage({
          path: `/${page.uri}/`,
          component: pageTemplate,
          context: page,
        })
      })
  })
}
