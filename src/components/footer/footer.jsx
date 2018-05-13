import React from 'react';
import styled from 'styled-components';

import { Container } from '../container/container';
import github from './github.svg';
import picture from './picture.jpeg';
import twitter from './twitter.svg';

const Footer = styled.div`
    display:block;
    padding: 1.2em 0;
    background-color: #99c0d6;
    color: #fff;
    font-family: 'kinesis-pro-3';
    margin: 6rem 0 0 0;
    img {
        float: right;
        position: relative;
        margin-top: -85px;
        margin-bottom: 0;
        width: 160px;
        border: 3px solid white;
        border-radius: 50%;
    }
}
`

const FooterTwitter = styled.a`
  font-size: 16px;
  color: #fff;
  background: url(${twitter}) no-repeat left center;
  padding-left: 1.5em;
`

const FooterGithub = styled.a`
  font-size: 16px;
  color: #fff;
  background: url(${github}) no-repeat left center;
  padding-left: 1.25em;
  margin-left: 1rem;
`

const FooterSignature = styled.p`
  color: #fff;
  margin: 0 0 0.5em 0;

  span {
    opacity: 0.6;
    font-size: 16px;
    display: block;
  }
`

export default props => (
  <Footer>
    <Container>
      <img src={picture} alt="A photo of me!" />

      <FooterSignature>
        Ryan Hyslop
        <span>Frontend Developer &amp; UX Designer</span>
      </FooterSignature>

      <FooterTwitter href="http://www.twitter.com/ryanhyslop">
        @ryanhyslop
      </FooterTwitter>
      <FooterGithub href="http://github.com/ryanhyslop">
        ryanhyslop
      </FooterGithub>
    </Container>
  </Footer>
)
