import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { IndexHogeQuery } from "../../types/graphql-types"
// ______________________________________________________
//
type Props = {
  data: IndexHogeQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>
      Welcome to your new{" "}
      <strong>{data.site?.siteMetadata?.title}</strong> site.
    </p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)
// ______________________________________________________
//
export const pageQuery = graphql`
  query IndexHoge {
    site {
      siteMetadata {
        title
      }
    }
  }
`
// ______________________________________________________
//
export default Component