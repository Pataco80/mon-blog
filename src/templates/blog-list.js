import React from "react"
// Import components from Gatsby and plugins Gatsby
import { graphql } from "gatsby"

// Import Components for App
import Layout from "../components/Global/Layout"
import Seo from "../components/Global/seo"
import PostItem from "../components/Posts/PostItem"
import Pagination from "../components/Pagination"

// Import Styles
import * as S from "../components/Posts/styled"
// GraphQl Queries

// Dans cette requête nous passons en paramêtre 2 variables, "${limit} et ${skip}" sous forme de nombre entiers "Int!". La valeur provient du context généré par la création de la page dans gatsby-node". Attention ne pas mêttre de nom racourcis devant "allMarkdownRemark".
export const getPosts = graphql`
  query postsList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "dddd, DD MMM YYYY", locale: "fr")
            title
            description
            category
            background
          }
          timeToRead
        }
      }
    }
  }
`

// Component
const BlogListTemplate = props => {
  // Nous passons en paramêtre de la page toutes les "props" afin d'obtenir les requêtes graphQl et le "context" fournis par "gatsby-node.js"

  // Création d'une variable contenant le tableau de la liste des posts de la requête.
  const postsList = props.data.allMarkdownRemark.edges
  // importation du contexte de page de "gatsby-node.js"
  const { currentPage, numPages } = props.pageContext

  // Calcul des actions du component Pagination
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  // Render Component
  return (
    <Layout>
      <Seo title="Home" />
      <S.PostItemsLayout>
        {postsList.map(
          ({
            node: {
              frontmatter: { date, title, description, category, background },
              timeToRead,
              fields: { slug },
            },
          }) => {
            return (
              <PostItem
                slug={slug}
                date={date}
                title={title}
                description={description}
                category={category}
                background={background}
                timeToRead={timeToRead}
              />
            )
          }
        )}
      </S.PostItemsLayout>

      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
        isFirst={isFirst}
        isLast={isLast}
      />
    </Layout>
  )
}

export default BlogListTemplate
