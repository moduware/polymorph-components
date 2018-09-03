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
              <morph-button platform="android" big filled color="red">morph button</morph-button>
            </p>
          </div>

          <div className="right">
            <p>
              IOS Morph Button
              <morph-button platform="ios" big filled color="blue">morph button</morph-button>
            </p>
          </div>
        </MorphColumn>

        <h3>morph-tabbar</h3>

        <MorphColumn>
          <div className="left">
            <p>
              Android Morph Tabbar
              <morph-tabbar platform="android" selected="play" label>
                <morph-tabbar-item platform="android" name="play" not-selected-image="../images/play_android.svg" selected-image="../images/play_android_selected.svg" has-label>play</morph-tabbar-item>
                <morph-tabbar-item platform="android" name="favorite" not-selected-image="../images/favorite_android.svg" selected-image="../images/favorite_android_selected.svg" has-label>favorite</morph-tabbar-item>
                <morph-tabbar-item platform="android" name="mic" not-selected-image="../images/mic_android.svg" selected-image="../images/mic_android_selected.svg" has-label>mic</morph-tabbar-item>
              </morph-tabbar>
            </p>
          </div>

          <div className="right">
            <p>
              IOS Morph Tabbar
              <morph-tabbar platform="ios" selected="play" label>
                <morph-tabbar-item platform="ios" name="play" not-selected-image="../images/play_ios.svg" selected-image="../images/play_ios_selected.svg" has-label>play</morph-tabbar-item>
                <morph-tabbar-item platform="ios" name="favorite" not-selected-image="../images/favorite_ios.svg" selected-image="../images/favorite_ios_selected.svg" has-label>favorite</morph-tabbar-item>
                <morph-tabbar-item platform="ios" name="mic" not-selected-image="../images/mic_ios.svg" selected-image="../images/mic_ios_selected.svg" has-label>mic</morph-tabbar-item>
              </morph-tabbar>
            </p>
          </div>
        </MorphColumn>

      </div>
    )
  }
}

export default MorphContainer
