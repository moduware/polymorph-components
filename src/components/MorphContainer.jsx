import React, { Component } from 'react'
import MorphColumn from '../components/Morph/MorphColumn'
import NavLink from '../components/NavLink';
import WebcomponentLogo from './Morph/WebcomponentLogo';
  

class MorphContainer extends Component {
  render() {
    return (
      <div className="morph">
        <NavLink to={'/morph-button'}>morph-button</NavLink>
        <WebcomponentLogo href="https://www.webcomponents.org/element/moduware/morph-button/v0.0.4-alpha" />
        <MorphColumn>
          <div className="left">
            <span>
              <p>Android Morph Button</p>
              <span>
                <morph-button platform="android" big filled color="red">morph button</morph-button>
              </span>
            </span>
          </div>

          <div className="right">
            <span>
              <p>IOS Morph Button</p>
              <span>
                <morph-button platform="ios" big filled color="blue">morph button</morph-button>
              </span>
            </span>
          </div>
        </MorphColumn>

        <NavLink to={'/morph-tabbar'}>morph-tabbar</NavLink> and <NavLink to={'/morph-tabbar-item'}>morph-tabbar-item</NavLink>
        <WebcomponentLogo href="https://www.webcomponents.org/element/moduware/morph-tabbar" />

        <MorphColumn>
          <div className="left">
            <span>
              <p>Android Morph Tabbar</p>
              <span>
                <morph-tabbar platform="android" selected="play" label>
                  <morph-tabbar-item platform="android" name="play" not-selected-image="../images/play_android.svg" selected-image="../images/play_android_selected.svg" has-label>play</morph-tabbar-item>
                  <morph-tabbar-item platform="android" name="favorite" not-selected-image="../images/favorite_android.svg" selected-image="../images/favorite_android_selected.svg" has-label>favorite</morph-tabbar-item>
                  <morph-tabbar-item platform="android" name="mic" not-selected-image="../images/mic_android.svg" selected-image="../images/mic_android_selected.svg" has-label>mic</morph-tabbar-item>
                </morph-tabbar>
              </span>
            </span>
          </div>

          <div className="right">
            <span>
              <p>IOS Morph Tabbar</p>
              <span>
                <morph-tabbar platform="ios" selected="play" label>
                  <morph-tabbar-item platform="ios" name="play" not-selected-image="../images/play_ios.svg" selected-image="../images/play_ios_selected.svg" has-label>play</morph-tabbar-item>
                  <morph-tabbar-item platform="ios" name="favorite" not-selected-image="../images/favorite_ios.svg" selected-image="../images/favorite_ios_selected.svg" has-label>favorite</morph-tabbar-item>
                  <morph-tabbar-item platform="ios" name="mic" not-selected-image="../images/mic_ios.svg" selected-image="../images/mic_ios_selected.svg" has-label>mic</morph-tabbar-item>
                </morph-tabbar>
              </span>
            </span>
          </div>
        </MorphColumn>

        <NavLink to={'/morph-list-view'}>morph-list-view</NavLink> and <NavLink to={'/morph-list-view-item'}>morph-list-view-item</NavLink>
        <WebcomponentLogo href="https://www.webcomponents.org/element/moduware/morph-list-view" />
        <MorphColumn single>
          <div className="left">
            <span>
              <p>Android Morph List View</p>
              <span>
                <morph-list-view platform="android">
                  <morph-list-view-title platform="android">First list</morph-list-view-title>
                  <morph-list-view-item platform="android">Item 1</morph-list-view-item>
                  <morph-list-view-item platform="android">Item 2</morph-list-view-item>
                  <morph-list-view-item platform="android">Item 3</morph-list-view-item>
                </morph-list-view>
              </span>
            </span>
          </div>
          <div className="right">
            <span>
              <p>IOS Morph List View</p>
              <span>
                <morph-list-view platform="ios">
                  <morph-list-view-title platform="ios">First list</morph-list-view-title>
                  <morph-list-view-item platform="ios">Item 1</morph-list-view-item>
                  <morph-list-view-item platform="ios">Item 2</morph-list-view-item>
                  <morph-list-view-item platform="ios">Item 3</morph-list-view-item>
                </morph-list-view>
              </span>
            </span>
          </div>
        </MorphColumn>

        <NavLink to={'/morph-pages'}>morph-pages</NavLink>
        <WebcomponentLogo href="https://www.webcomponents.org/element/moduware/morph-pages" />        
        <MorphColumn>
          <div className="left">
            <span>
              <p>Android Morph Pages</p>
              <span>
                <img src="/images/morph-pages-ios-demo.gif" alt="Morph Pages element" />
              </span>
            </span>
          </div>
          <div className="right">
            <span>
              <p>IOS Morph Pages</p>
              <span>
                <img src="/images/morph-pages-android-demo.gif" alt="Morph Pages element" />
              </span>
            </span>
          </div>
        </MorphColumn>

        <NavLink to={'/morph-sidebar'}>morph-sidebar</NavLink>
        <WebcomponentLogo href="https://www.webcomponents.org/element/moduware/morph-sidebar/v0.0.2-alpha" />
        <MorphColumn>
          <div className="left">
            <span>
              <p>Android Morph Sidebar</p>  
              <span>
                <img src="/images/sidebar-demo-android.gif" alt="Morph Sidebar element" />
              </span>
            </span>
          </div>
          <div className="right">
            <span>
              <p>IOS Morph Sidebar</p>
              <p>
                <img src="/images/sidebar-demo-ios.gif" alt="Morph Sidebar element" />
              </p>
            </span>
          </div>
        </MorphColumn>

        <NavLink to={'/morph-swipeout'}>morph-swipeout</NavLink>
        <WebcomponentLogo href="https://www.webcomponents.org/element/moduware/morph-swipeout" />

        <MorphColumn single>
          <div className="single">
            <span>
              <p>Android Morph swipeout</p>
              <span className="image-container">
                <img src="/images/morph-swipeout-demo.gif" alt="morph-swipeout demo" />
              </span>
            </span>
          </div>
        </MorphColumn>

        <NavLink to={'/morph-ripple'}>morph-ripple</NavLink>
        <WebcomponentLogo href="https://www.webcomponents.org/element/moduware/morph-ripple" />
        <MorphColumn>
          <div className="single">
            <span>
              <p>Android Morph Ripple</p>
              <span className="image-container">
                <img src="/images/ripple-tabbar-demo.gif" alt="morph ripple demo image" />
              </span>
            </span>
          </div>
        </MorphColumn>

        <NavLink to={'/morph-overlay'}>morph-overlay</NavLink>
        <WebcomponentLogo href="https://www.webcomponents.org/element/moduware/morph-overlay" />
        <MorphColumn>
          <div className="single">
            <span>
              <p>Android Morph Overlay</p>
              <span className="image-container">
                <img src="/images/overlay-android-demo.gif" alt="morph sidebar demo image" />
              </span>
            </span>
          </div>
        </MorphColumn>
      </div>
    )
  }
}

export default MorphContainer
