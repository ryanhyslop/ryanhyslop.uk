import React from 'react';
import styled from 'styled-components';

import { mediaMinWidth } from '../../utils/media-queries';
import { Container } from '../container/container';
import logo from './ryanhyslop.svg';

const StyledHeader = styled.header`
  background-image: linear-gradient(0deg, #ffffff 50%, #e4e4e4 100%);
  text-align: center;
  padding: 1em 0;
  overflow: hidden;
  font-family: 'kinesis-pro-3';
  img {
    display: block;
    margin: ${props => (props.type === 'small' ? '0' : '0 auto')};
    max-width: ${props => (props.type === 'small' ? '60px' : 'none')};
  }

  ${mediaMinWidth.medium`
      img {
          float: left;
          margin-right: 20px;
      }
  `};
`

const Intro = styled.h2`
  color: #6e6e6e;
  line-height: 1;
  font-weight: normal;

  ${mediaMinWidth.medium`
    float: left;
    margin-top: 25px;
    text-align: left;
    font-size: 2rem;
  `} em {
    color: #9ac0d5;
    font-style: normal;

    &:before {
      //force line break
      content: '';
      display: block;
    }
  }
`

export const Header = props => (
  <StyledHeader {...props}>
    <header role="banner">
      <Container>
        <h1>
          <a href="/">
            <img src={logo} alt="Ryan Hyslop" />
          </a>
        </h1>
        {props.type !== 'small' && (
          <Intro>
            I design &amp; develop <em>experiences</em> on the web
          </Intro>
        )}
      </Container>
    </header>
  </StyledHeader>
)
