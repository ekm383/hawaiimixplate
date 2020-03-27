import React, { Component } from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/restaurantmarketinghawaii",
      },
      {
        id: 3,
        icon: <FaGoogle className="icon google-icon" />,
        path: "https://www.google.com/restaurantmarketinghawaii",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/restaurantmarketinghawaii",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="box contact">
          <div style={{ marginTop: "10px" }}>
            {this.state.icons.map(item => (
              <a
                href={item.path}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  background: var(--gray);
  color: var(--white);
  .box {
    padding: 2rem;
  }
  a {
    color: var(--white);
    font-size: 1.4rem;
    line-height: 4rem;
    margin-right: 5px;
  }
`

export default Footer
