import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/globals/section/Section"
import HeaderPage from "../components/globals/header/HeaderPage"
import SEO from "../components/seo"
import Banner from "../components/globals/banner/Banner"
import Intro from "../components/Intro"
import { FaClock, FaUserFriends, FaConciergeBell } from "react-icons/fa"
import imgIndex from "../images/bg/sashimi.jpg"

const Post = ({ data }) => {
  const { isbn, author, title } = data.recipeItem

  return (
    <Layout>
      <templateWrapper>
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
        <HeaderPage img={imgIndex}>
          <Section>
            <Banner title={title}>
              <ul>
                <li>
                  <FaClock />
                  {isbn}
                </li>
                <li>
                  <FaUserFriends />
                  {author}
                </li>
                <li>
                  <FaConciergeBell />
                  {isbn}
                </li>
              </ul>
            </Banner>
          </Section>
        </HeaderPage>
        <Section>
          <Intro heading="cooking instructions" />
          <p>Put all steps here</p>
        </Section>
      </templateWrapper>
    </Layout>
  )
}

export const query = graphql`
  query($isbn: String!) {
    recipeItem: postsJson(isbn: { eq: $isbn }) {
      isbn
      author
      title
    }
  }
`

export default Post
