import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

import Footer from '../components/footer';

import 'prismjs/themes/prism-solarizedlight.css';
import '../css/base.scss';
import '../css/highlight.scss';

export default class Template extends React.Component {

  render() {
    const { location, children, data } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    const isRoot = location.pathname === rootPath;

    if (isRoot) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              fontFamily: 'Montserrat',
            }}
            className="milky"
            to={'/'}
          >
            Takumon Blog
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              fontFamily: 'Montserrat',
            }}
            className="milky"
            to={'/'}
          >
            Takumon Blog
          </Link>
        </h3>
      )
    }


    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}

        <Footer isRoot={isRoot} />
      </div>
    )
  }
}

