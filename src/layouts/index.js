import React from 'react';
import Helmet from 'react-helmet';
import Typekit from 'react-typekit';
import { injectGlobal } from 'styled-components';

import Footer from '../components/footer/footer';

require('prismjs/themes/prism-solarizedlight.css')

injectGlobal`
  body {
    font-family: 'open-sans';
    margin: 0;
    padding: 0;
  }

  a {
    color: #333;
  }
`

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
        <Helmet>
          <link rel="shortcut icon" href="/favicon.png" />
        </Helmet>
        <Typekit kitId="dxl2kun" />
        {children()}

        <Footer />
      </div>
    )
  }
}

export default Template
