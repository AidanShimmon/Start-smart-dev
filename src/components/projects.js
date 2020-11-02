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
    <section className="projects" id="projects">
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
            <p>Ben wanted to increase his online presence and create a portfolio, we developed a website that both showcases his work and allows potential clients to easily connect with him.</p>
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
            <p>We designed and developed a WordPress website to allow our client to easily manage and update their website.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects; 