import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import { StaticImage } from "gatsby-plugin-image"
import { image } from './index.module.css'
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle='Saleuem teuka bak website Keunubah!'>
      <p>Lon peugot nyoe deungon lon seutot tutorial gatsby.</p>
      <div className={image}>
        <StaticImage
          alt="Masjid Baiturrahman, Banda Atjeh"
          src="https://images.unsplash.com/photo-1591017940761-68725ef7d016?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80"
        />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title='On Keuphon' />

export default IndexPage;