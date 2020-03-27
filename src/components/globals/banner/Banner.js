import React from "react"
import styled from "styled-components"

const Banner = ({ style, title, subtitle, children }) => {
  return (
    <BannerWrapper style={style}>
      <div className="box">
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  color: var(--white);
  .title {
    font-family: "Poppins";
    font-size: 5rem;
    text-transform: uppercase;
    line-height: 5rem;
  }
  .subtitle {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
  }
  .box {
    flex-basis: 80%;
    text-align: center;
    padding: 7rem 0rem 8rem 0rem;
  }

  @media (max-width: 768px) {
    flex-basis: 80%;
    margin: 0 auto;
    .box {
      flex-basis: 100%;
      padding: 6rem 0rem 6rem 0rem;
    }
  }
`

export default Banner
