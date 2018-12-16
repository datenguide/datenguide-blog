import React from 'react'

import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Hero from '../../components/Hero.js'
import Footer from '../../components/Footer'

export default ({ pageContext }) => {
  const { regionMeta, name } = pageContext

  return (
    <Layout>
      <div className="region">
        <Header />
        <Hero title={name} intro={regionMeta.name} />
        <Footer />
      </div>
    </Layout>
  )
}
