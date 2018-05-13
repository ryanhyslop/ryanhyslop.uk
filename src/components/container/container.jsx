import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 1em;
  margin: 0 auto;
  max-width: ${props => (props.type === 'narrow' ? '720px' : '1000px')};
`
