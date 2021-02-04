import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>howtobeat.gg</h1>
    <p>For trading and collectible card game players who need an edge up on their opponents.</p>
    <p>Choose the deck you play, then choose the deck you need to beat. Find strategies, videos, and card suggestions to help you!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/"> Get Started</Link> <br />
  </Layout>
)

export default IndexPage
