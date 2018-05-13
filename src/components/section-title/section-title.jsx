import React from 'react';
import styled from 'styled-components';

import { mediaMinWidth } from '../../utils/media-queries';

export const SectionTitle = styled.h2`
  color: #99c0d6;
  font-size: 18px;
  border-bottom: 1px solid #99c0d6;
  text-align: center;
  margin-bottom: 2em;
  line-height: 1;
  font-family: 'kinesis-pro-3';
  font-weight: normal;
  span {
    position: relative;
    top: 0.5em;
    padding: 0.25em;
    background: #fff;
  }

  ${mediaMinWidth.medium`
        text-align: left;
        padding-left: 10px;
        font-size: 24px;
        margin-bottom: 1em;
    `};
`
