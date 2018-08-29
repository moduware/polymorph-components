---
title: "morph-overlay"
---

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/PolymerElements/paper-progress)

Overlay that morphs for current mobile OS

## Getting Started

For the information about how to clone the desired repository, running the local server and testing, please refer to Polymorph elements getting started docs at the end of this repository.

## Demo

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../morph-shared-colors/morph-shared-colors.html">
    <link rel="import" href="../morph-shared-styles/morph-shared-styles.html">
    <link rel="import" href="../morph-button/morph-button.html">
    <link rel="import" href="morph-overlay.html">
    <script>
      //Open and closes Android overlay
      function openAndroidOverlay() {
        document.getElementById('androidOverlay').setAttribute("open", true);
      }
      function closeAndroidOverlay () {
        var androidOverlay = document.getElementById('androidOverlay');
        if (androidOverlay.hasAttribute("open")) {
          androidOverlay.removeAttribute("open");
        }
      }
    </script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<h4>Android morph-overlay interactive demo. Click the button to see overlay.</h4>
<morph-overlay id="androidOverlay" platform="android" onclick="closeAndroidOverlay()"></morph-overlay>
<morph-button platform="android" filled onclick="openAndroidOverlay()">Show Overlay</morph-button>
```

- Here is a quick demo of the morph-overlay element

```html

  <template>
    <h4>Android morph-overlay demo</h4>
    <morph-overlay id="androidOverlay" platform="android" onclick="closeAndroidOverlay()"></morph-overlay>
    <morph-button filled onclick="openAndroidOverlay()">Show Overlay</morph-button>
  </template>

```

  <p align="center" >
    <img src="/images/overlay-android-demo.gif" alt="morph sidebar demo image" />
  </p>

## Attributes

|      Custom Attribute      |   Type  |                                   Description                                  |              Default              |
|:--------------------------:|:-------:|:------------------------------------------------------------------------------:|:---------------------------------:|
|       **`platform`**       |  String | Name of the platform, get assigned<br> automatically by the morph element.     | Either **`andorid`** or **`ios`** |
| **`open`** |  Boolean | Shows the state of the element,<br> if it is open or not.  | **`false`**                       |

## Styling

-For Android platform;

Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--android-background-color`     | Background color of overlay            | rgba(0,0,0,0.2)

-For IOS platform;

Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--ios-background-color`         | Background color of overlay            | rgba(0,0,0,0)

## Further help

For more information on how to install and run test please go here - [Polymorph elements getting started]

[Polymorph elements getting started]: https://github.com/moduware/polymorph-components/blob/master/INFO.md
