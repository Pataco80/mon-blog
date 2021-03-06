import React from "react"

// Import Components for App
import Layout from "../components/Global/Layout"
import Seo from "../components/Global/seo"

// Import Styles

// Component
const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

// React PropTypes and more...

// Styles from styled-components

export default NotFoundPage
