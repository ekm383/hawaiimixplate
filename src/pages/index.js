import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import Search from "../components/Search"
import imgIndex from "../images/bg/sashimi.jpg"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home | Hawaii Mix Plate"
      description="What are you craving?`,
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
    <HeaderIndex img={imgIndex}>
      <Section>
        <Banner
          title="Hawaii Mix Plate"
          subtitle="Your favorite local food recipes by the cultures that make up modern Hawaii."
        ></Banner>
      </Section>
    </HeaderIndex>
    <Section id="search">
      <Search />
    </Section>
  </Layout>
)

export default IndexPage
