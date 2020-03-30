import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/globals/section/Section"
import HeaderPage from "../components/globals/header/HeaderPage"
import SEO from "../components/seo"
import Banner from "../components/globals/banner/Banner"
import Intro from "../components/Intro"
import styled from "styled-components"
import {
  FaClock,
  FaUserFriends,
  FaConciergeBell,
  FaCircle,
} from "react-icons/fa"
import imgIndex from "../images/bg/sashimi.jpg"

const Post = ({ data }) => {
  const {
    keywords,
    title,
    cooktime,
    servings,
    category,
    ingredients,
    steps,
  } = data.recipeItem

  return (
    <Layout>
      <Wrapper>
        {/*
         * Need to fix keywords to make sure they're comma separated
         */}
        <SEO
          title="Home | Hawaii Mix Plate"
          description="What are you craving?`,
      author: `@restaurantmarketinghawaii"
          keywords={keywords}
        />
        <HeaderPage img={imgIndex}>
          <Section>
            <Banner title={title}>
              <ul className="summaryStyle">
                <li>
                  <FaClock />
                  Cooktime: {cooktime} Hour
                </li>
                <li>
                  <FaUserFriends />
                  Servings: {servings}
                </li>
                <li>
                  <FaConciergeBell />
                  Category: {category}
                </li>
              </ul>
            </Banner>
          </Section>
        </HeaderPage>
        <Section>
          <Intro heading="ingredients" />
          <ul className="ingredientstyle">
            {ingredients.map((value, id) => {
              return (
                <li key={id}>
                  <FaCircle /> {value}
                </li>
              )
            })}
          </ul>
        </Section>
        <Section>
          <Intro heading="steps" />
          <ul className="stepStyle">
            {steps.map((value, id) => {
              return <li key={id}>{value}</li>
            })}
          </ul>
        </Section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    recipeItem: dataJson(slug: { eq: $slug }) {
      id
      slug
      title
      published
      cooktime
      servings
      category
      ingredients
      steps
      keywords
    }
  }
`

const Wrapper = styled.div`
  .summaryStyle {
    text-transform: capitalize;
  }
  .ingredientstyle {
    li {
      display: inline;
      margin-right: 1rem;
      font-size: 1rem;
      svg {
        font-size: 0.5rem;
        margin-right: 0.2rem;
      }
    }
  }
  .stepStyle {
    list-style-type: none;
    li {
      margin-bottom: 1.5rem;
    }
  }
`

export default Post
