import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from './components/Layout';
import { header, btn } from '../styles/home.module.css';

export default function Home({ data }) {
  // console.log(data);
  // const {title, description} = data.site.siteMetadata
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Gdansk.</p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
        {/* <img src='/banner.png' alt='site banner' style={{maxWidth: '100%'}}/> */}
        {/* <p>{title} - {description}</p>  */}
      </section>
    </Layout>
  );
}

// export const query = graphql`
// query siteInfo {
//   site {
//     siteMetadata {
//       description
//       title
//     }
//   }
// }
// `

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
