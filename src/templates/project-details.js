/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Layout from '../pages/components/Layout';
import * as styles from '../styles/project-details.module.css';
// import { details, featured, html } from '../styles/project-details.module.css';

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className={styles.details}>
        <h2>{title}</h2>

        <h3>{stack}</h3>
        <div className={styles.featured}>
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div
          className={styles.html}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

// import React from "react"
// import Img from "gatsby-image"
// import Layout from "../components/Layout"
// import styles from '../styles/project-details.module.css'

// const ProjectDetails = () => {
//   return (
//     <Layout>
//       <div className={styles.details}>
//         <h2>title</h2>
//         <h3>stack</h3>
//         <div className={styles.featured}>
//           {/* <Img fluid={} /> */}
//         </div>
//         {/* <div className={styles.html} dangerouslySetInnerHTML={} /> */}
//       </div>
//     </Layout>
//   )
// }

// export default ProjectDetails