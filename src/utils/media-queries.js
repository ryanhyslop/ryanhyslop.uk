import styled, { css } from 'styled-components';

const sizes = {
  small: 460,
  medium: 600,
  large: 960,
  xLarge: 1280,
}

// Iterate through the sizes and create a media template
export const mediaMinWidth = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css.apply(
        null,
        args
      ) /*https://github.com/Microsoft/TypeScript/issues/4130*/};
    }
  `

  return acc
}, {})
