import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Projects = () => {

  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <section className="projects">
      <h2 className="projects__title">Projects</h2>

      <div className="projects__tile">
        <div className="projects__tile__content">
          <Img 
            className="projects__tile__image"
            fluid={data.allImageSharp.edges[1].node.fluid}
            alt="Bens"
          />

          <div className="projects__tile__text">
            <h3>Bens bespoke<br/> furniture and joinery</h3>
            <p>Specialized in delivering <strong>modern</strong>, <strong>clean</strong>, <strong>fast</strong> and <strong>effective</strong> websites. My skillset consists of HTML, SCSS, JavaScript, Wordpress and Vue. </p>
            <p>Outside of web development I am passionate about music, excersice and sustainability.</p>
          </div>
        </div>
      </div>

      <div className="projects__tile">
        <div className="projects__tile__content">
          <Img 
            className="projects__tile__image"
            fluid={data.allImageSharp.edges[2].node.fluid}
            alt="Hideaway"
          />

          <div className="projects__tile__text">
            <h3>The Hideaway Beauty Cabin</h3>
            <p>Specialized in delivering <strong>modern</strong>, <strong>clean</strong>, <strong>fast</strong> and <strong>effective</strong> websites. My skillset consists of HTML, SCSS, JavaScript, Wordpress and Vue. </p>
            <p>Outside of web development I am passionate about music, excersice and sustainability.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects; 