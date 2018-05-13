import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { mediaMinWidth } from '../../utils/media-queries';

const StyledArticle = styled.article`
  border-bottom: 1px solid #99c0d6;
  position: relative;
  margin-bottom: 2em;
  padding-bottom: 2em;
  &:after {
    content: '';
    position: absolute;
    display: block;
    background: #99c0d6;
    height: 1px;
    left: 25%;
    right: 25%;
    bottom: -2px;
  }
`

const ArticleHeader = styled.header`
  margin-bottom: 1em;
  border-bottom: ${props =>
    props.type === 'single' ? '1px solid #eee' : 'none'};
`

const ArticleTitle = styled.h3`
  text-align: center;
  margin-bottom: 0;
  line-height: 1.2;
  font-size: 28px;
  font-family: 'kinesis-pro-3';
  font-weight: normal;

  ${mediaMinWidth.medium`
        text-align: left;
        font-size: 32px;
    `};

  a {
    text-decoration: none;
    color: #333;
    &:hover {
      color: #9ac0d5;
    }
  }
`

const ArticleTitleSingle = styled(ArticleTitle)`
  font-size: 36px;
  ${mediaMinWidth.medium`
            font-size: 42px;
    `};
`

const ArticleDate = styled.time`
  display: block;
  text-align: center;
  color: #6b6a6a;
  padding: 0.5em 0;
  font-family: 'kinesis-pro-3';

  ${mediaMinWidth.medium`
        text-align: left;
        font-size: 16px;
   `};

  &:after,
  &:before {
    content: ' - ';
    ${mediaMinWidth.medium`
            content: '';
            `};
  }
`

const ArticleBody = styled.div`
  padding: 0 1em;
  ${mediaMinWidth.medium`
        padding: 0;
    `};
`

const ArticleComments = styled.div`
  padding-bottom: 2em;
`

export const Article = props => (
  <StyledArticle type={props.type}>
    <ArticleHeader type={props.type}>
      {props.type === 'single' ? (
        <ArticleTitleSingle>{props.title}</ArticleTitleSingle>
      ) : (
        <ArticleTitle>
          <Link to={props.link}>{props.title}</Link>
        </ArticleTitle>
      )}
      <ArticleDate>{props.date}</ArticleDate>
    </ArticleHeader>

    <ArticleBody dangerouslySetInnerHTML={{ __html: props.content }} />
  </StyledArticle>
)
