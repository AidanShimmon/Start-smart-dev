import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Project from "./project"

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

      <div className="projects__wrapper">
        <Project
          title="Bens bespoke furniture and joinery"
          content="Ben wanted to increase his online presence and create a portfolio, we developed a website that both showcases his work and allows potential clients to easily connect with him."
          link="https://www.bensbespoke.co.uk/"
          imageUrl={data.allImageSharp.edges[2].node.fluid}
          imageAlt={data.allImageSharp.edges[2].node.id}
        />

        <Project
          title="The Hideaway Beauty Cabin"
          content="We designed and developed a custom WordPress theme to allow our client to easily manage and update their website."
          link="https://thehideawaybeautycabin.co.uk/"
          imageUrl={data.allImageSharp.edges[3].node.fluid}
          imageAlt={data.allImageSharp.edges[3].node.id}
        />

        <Project
          title="East Coast Family Restaurant"
          content="This project was a modernisation and refresh of an old website. The website was designed to match current business branding and focused on providing information to customers."
          link="https://upbeat-booth-6bd450.netlify.app/"
          imageUrl={data.allImageSharp.edges[1].node.fluid}
          imageAlt={data.allImageSharp.edges[1].node.id}
        />

        {/* <Project
          title="Angels Polo Team"
          content="This website was designed to match the Angels Polo Team existing branding. The goal, to advertise the team, their latest news and achievements."
          link="https://www.angelspoloteam.com/"
          imageUrl={data.allImageSharp.edges[3].node.fluid}
          imageAlt={data.allImageSharp.edges[3].node.id}
        /> */}
        
      </div>

    </section>
  )
}
 
export default Projects; 