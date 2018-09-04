import React, { Component } from 'react'
import MorphColumn from '../components/Morph/MorphColumn'

class MorphContainer extends Component {
  render() {
    return (
      <div className="morph">
        <h3>morph-button</h3>

        <MorphColumn>
          <div className="left">
            <p>
              Android Morph Button
              <p>
                <morph-button platform="android" big filled color="red">morph button</morph-button>
              </p>
            </p>
          </div>

          <div className="right">
            <p>
              IOS Morph Button
              <p>
                <morph-button platform="ios" big filled color="blue">morph button</morph-button>
              </p>
            </p>
          </div>
        </MorphColumn>

        <h3>morph-tabbar and morph-tabbar-item</h3>

        <MorphColumn>
          <div className="left">
            <p>
              Android Morph Tabbar
              <p>
                <morph-tabbar platform="android" selected="play" label>
                  <morph-tabbar-item platform="android" name="play" not-selected-image="../images/play_android.svg" selected-image="../images/play_android_selected.svg" has-label>play</morph-tabbar-item>
                  <morph-tabbar-item platform="android" name="favorite" not-selected-image="../images/favorite_android.svg" selected-image="../images/favorite_android_selected.svg" has-label>favorite</morph-tabbar-item>
                  <morph-tabbar-item platform="android" name="mic" not-selected-image="../images/mic_android.svg" selected-image="../images/mic_android_selected.svg" has-label>mic</morph-tabbar-item>
                </morph-tabbar>
              </p>
            </p>
          </div>

          <div className="right">
            <p>
              IOS Morph Tabbar
              <p>
                <morph-tabbar platform="ios" selected="play" label>
                  <morph-tabbar-item platform="ios" name="play" not-selected-image="../images/play_ios.svg" selected-image="../images/play_ios_selected.svg" has-label>play</morph-tabbar-item>
                  <morph-tabbar-item platform="ios" name="favorite" not-selected-image="../images/favorite_ios.svg" selected-image="../images/favorite_ios_selected.svg" has-label>favorite</morph-tabbar-item>
                  <morph-tabbar-item platform="ios" name="mic" not-selected-image="../images/mic_ios.svg" selected-image="../images/mic_ios_selected.svg" has-label>mic</morph-tabbar-item>
                </morph-tabbar>
              </p>
            </p>
          </div>
        </MorphColumn>

        <h3>morph-list-view and morph-list-view-item</h3>

        <MorphColumn>
          <div className="left">
            <p>
              Android Morph List View
              <p>
                <morph-list-view platform="android">
                  <morph-list-view-title platform="android">First list</morph-list-view-title>
                  <morph-list-view-item platform="android">Item 1</morph-list-view-item>
                  <morph-list-view-item platform="android">Item 2</morph-list-view-item>
                  <morph-list-view-item platform="android">Item 3</morph-list-view-item>
                </morph-list-view>
              </p>
            </p>
          </div>
          <div className="right">
            <p>
              IOS Morph List View
              <p>
                <morph-list-view platform="ios">
                  <morph-list-view-title platform="ios">First list</morph-list-view-title>
                  <morph-list-view-item platform="ios">Item 1</morph-list-view-item>
                  <morph-list-view-item platform="ios">Item 2</morph-list-view-item>
                  <morph-list-view-item platform="ios">Item 3</morph-list-view-item>
                </morph-list-view>
              </p>
            </p>
          </div>
        </MorphColumn>

        <h3>morph-pages</h3>
        
        <MorphColumn>
          <div className="left">
            <p>
              Android Morph Pages
              <p>
                <img src="/images/morph-pages-ios-demo.gif" alt="Morph Pages element" />
              </p>
            </p>
          </div>
          <div className="right">
            <p>
              IOS Morph Pages
              <p>
                <img src="/images/morph-pages-android-demo.gif" alt="Morph Pages element" />
              </p>
            </p>
          </div>
        </MorphColumn>

        <h3>morph-sidebar</h3>

        <MorphColumn>
          <div className="left">
            <p>
              Android Morph Sidebar
              <p>
                <img src="/images/sidebar-demo-android.gif" alt="Morph Sidebar element" />
              </p>
            </p>
          </div>
          <div className="right">
            <p>
              IOS Morph Sidebar
              <p>
                <img src="/images/sidebar-demo-ios.gif" alt="Morph Sidebar element" />
              </p>
            </p>
          </div>
        </MorphColumn>

        <h3>morph-swipeout</h3>

        <MorphColumn>
          <div className="left">
            <p>
              Android Morph swipeout
              <p align="center">
                <img src="/images/morph-swipeout-demo.gif" alt="morph-swipeout demo" />
              </p>
            </p>
          </div>
          <div className="right">
            <p>
              IOS Morph
            </p>
          </div>
        </MorphColumn>

        <h3>morph-ripple</h3>

        <MorphColumn>
          <div className="left">
            <p>
              Android Morph Ripple
              <p align="center">
                <img src="/images/ripple-tabbar-demo.gif" alt="morph ripple demo image" />
              </p>
            </p>
          </div>
          <div className="right">
            <p>
              IOS Morph
            </p>
          </div>
        </MorphColumn>

        <h3>morph-overlay</h3>

        <MorphColumn>
          <div className="left">
            <p>
              Android Morph Overlay
              <p>
                <img src="/images/overlay-android-demo.gif" alt="morph sidebar demo image" />
              </p>
            </p>
          </div>
        </MorphColumn>

      </div>
    )
  }
}

export default MorphContainer
