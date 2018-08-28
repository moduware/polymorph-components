/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react'
import favicon from './favicon.png'

let inlinedStyles = ''
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e)
  }
}

export default class HTML extends React.Component {

  // componentDidMount() {
  //   const scriptWeb = document.createElement("script");
  //   scriptWeb.src = "https://unpkg.com/@webcomponents/webcomponentsjs@next/webcomponents-loader.js";
  //   scriptWeb.async = true;
  //   document.body.appendChild(scriptWeb);

  //   const scriptHTML = document.createElement("script");
  //   scriptHTML.src = "https://unpkg.com/@webcomponents/html-imports@1.1.1/src/html-imports.js";
  //   scriptHTML.async = true;
  //   document.body.appendChild(scriptWeb);

  //   const linkPaper = document.createElement("link");
  //   linkPaper.href = "https://polygit.org/polymer+:2.x/paper-checkbox+polymerelements+:master/components/paper-checkbox/paper-checkbox.html";
  //   linkPaper.rel = "import";
  //   linkPaper.async = true;
  //   document.body.appendChild(linkPaper);
  //   console.log('componentDidMount');
  // }


  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      )
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
