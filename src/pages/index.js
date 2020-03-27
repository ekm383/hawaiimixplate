import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Section from "../components/globals/section/Section"
import imgIndex from "../images/bg/sashimi.jpg"
import Intro from "../components/Intro"

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
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner
          titleSmall="Hawaii Mix Plate"
          subtitle="Your favorite recipes of popular foods found in different cultures from Hawaii."
        ></Banner>
      </Section>
    </HeaderIndex>
    <Section id="search" style={{ marginTop: "2rem" }}>
      <Intro heading="search" />
    </Section>
  </Layout>
)

export default IndexPage
