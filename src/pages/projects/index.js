import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/Layout';
import { portfolio, projects } from '../../styles/project.module.css';

export default function Projects({ data }) {
  // console.log(data);
  const projectsData = data.projects.nodes;
  const { contact } = data.contact.siteMetadata;
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects}>
          {projectsData.map((project) => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              {/* // <Link to={`/project/${project.frontmatter.slug}` } key={project.id}> */}
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>Like what you see? Email me at {contact}</p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          stack
          title
          slug
          date
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
//   export const query = graphql`
//   query ProjectsPage {
//     projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
//   nodes {
//     frontmatter {
//       stack
//       title
//       slug
//       date
//     }
//     id
//   }
// }
// contact: site {
//   siteMetadata {
//     contact
//   }
//  }
//   }
// `
