import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import AboutMe from "../components/aboutMe"
import Project from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <Hero/>
    <AboutMe/>
    <Project/>
    <Contact/>
  </Layout>
)

export default IndexPage