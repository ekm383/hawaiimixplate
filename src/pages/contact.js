import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderPage from "../components/globals/header/HeaderPage"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import imgIndex from "../images/bg/sashimi.jpg"
import ContactForm from "../components/ContactForm"

const Contact = () => (
  <Layout>
    <SEO
      title="Home | Hawaii Mix Plate"
      description="Your favorite recipes from Hawaii curated by different cultures over a hundred years.`,
      author: `@restaurantmarketinghawaii"
      keywords={[
        `Hawaii Food Recipes`,
        `Hawaiian Food`,
        `Hawaii Local Food`,
        `Hawaiian Recipes`,
        `Hawaiian Mix Plate`,
        `Hawaiian Plate Lunch`,
      ]}
    />
    <HeaderPage img={imgIndex}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner title="Contact us"></Banner>
      </Section>
    </HeaderPage>
    <Section style={{ marginTop: "2rem" }}>
      <ContactForm />
    </Section>
  </Layout>
)

export default Contact
