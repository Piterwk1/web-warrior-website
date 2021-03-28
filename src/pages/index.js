import React from "react"
import { Link} from 'gatsby'
import Layout from "./components/Layout"
import {header, btn} from '../styles/home.module.css'

export default function Home() {
  // console.log(data);
  // const {title, description} = data.site.siteMetadata
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src='/banner.png' alt='site banner' style={{maxWidth: '100%'}}/>
        {/* <p>{title} - {description}</p>  */}
      </section>
    </Layout>
  )
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
