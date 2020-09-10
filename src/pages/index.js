import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import AboutMe from "../components/aboutMe"
import Project from "../components/projects"

const IndexPage = () => (
  <Layout>
    <Hero/>
    <AboutMe/>
    <Project/>
  </Layout>
)

export default IndexPage