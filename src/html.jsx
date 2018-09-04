/* eslint import/no-unresolved:"off" */
/* eslint import/extensions:"off" */
/* eslint global-require:"off" */
import React from 'react';
import favicon from './favicon.ico';

let inlinedStyles = '';
if (process.env.NODE_ENV === 'production') {
  try {
    /* eslint import/no-webpack-loader-syntax: off */
    inlinedStyles = require('!raw-loader!../public/styles.css');
  } catch (e) {
    /* eslint no-console: "off" */
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
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

          <script src="https://unpkg.com/@webcomponents/webcomponentsjs@next/webcomponents-loader.js"></script>
          <script src="https://unpkg.com/@webcomponents/html-imports@1.1.1/src/html-imports.js"></script>
          <link rel="import" href="https://cdn.rawgit.com/clint77/polymer-cdn/master/lib/morph-shared-colors/morph-shared-colors.html" />
          <link rel="import" href="https://cdn.rawgit.com/clint77/polymer-cdn/master/lib/morph-button/morph-button.html" />
          <link rel="import" href="https://cdn.rawgit.com/clint77/polymer-cdn/master/lib/morph-tabbar/morph-tabbar.html" />
          <link rel="import" href="https://cdn.rawgit.com/clint77/polymer-cdn/master/lib/morph-tabbar-item/morph-tabbar-item.html" />
          <link rel="import" href="https://cdn.rawgit.com/clint77/polymer-cdn/master/lib/morph-list-view/morph-list-view.html" />
          <link rel="import" href="https://cdn.rawgit.com/clint77/polymer-cdn/master/lib/morph-list-view-item/morph-list-view-item.html" />
          <link rel="import" href="https://cdn.rawgit.com/clint77/polymer-cdn/master/lib/morph-list-view-title/morph-list-view-title.html" />
          <link rel="import" href="https://cdn.rawgit.com/clint77/polymer-cdn/master/lib/morph-list-view-divider/morph-list-view-divider.html" />

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
