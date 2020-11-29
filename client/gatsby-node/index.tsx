import path from "path"
import { GatsbyNode } from "gatsby"
import { Site, SiteSiteMetadataAuthors } from "../types/graphql-types.d"
// ______________________________________________________
//
type Result = {
  site: Site
}
export type AuthorPageContext = {
  author: SiteSiteMetadataAuthors
} // template で利用するため export
// ______________________________________________________
//
const query = `
{
  site {
    siteMetadata {
      title
      authors {
        name
        slug
      }
    }
  }
}
`
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage }
}) => {
  const result = await graphql<Result>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }
  const { siteMetadata } = result.data.site
  if (!siteMetadata || !siteMetadata.authors) {
    throw new Error("undefined authors")
  }

  for (let author of siteMetadata.authors) {
    if (author) {
      createPage<AuthorPageContext>({
        path: `/authors/${author.slug}/`,
        component: path.resolve("src/templates/author.tsx"),
        context: { author }
      })
    }
  }
}

export const onCreatePage: GatsbyNode["onCreatePage"] = async ({ page, actions }) => {
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}