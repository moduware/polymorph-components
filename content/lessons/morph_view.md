---
title: "morph-view"
---

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/PolymerElements/paper-progress)

Polymorph View element where we put all of our elements.

`morph-view` is the containing parent element for components like `morph-sidebar`

## Getting Started

For the information about how to clone the desired repository, running the local server and testing, please refer to Polymorph elements getting started docs at the end of this repository.

## Demo

- Here is a quick usage example of the `morph-view` element.

```html

  <morph-view id="mainView" platform="ios">
    <h3>Android morph-sidebar demo</h3>

    <button id="sidebarLeftToggler">Toggle Left Sidebar</button>
  </morph-view>

  <morph-sidebar id="sidebarLeft" platform="android">
    <p>Left Panel content here</p>
    <p>simulated Android platform with cover animation and shadow</p>
  </morph-sidebar>

```

## Attributes

| Custom Attribute |   Type  | Description                                                                                                                      | Default     |
|:----------------:|:-------:|----------------------------------------------------------------------------------------------------------------------------------|-------------|
|  **`reveal`**  | String  | Takes the value of left or right | **`null`** |



## Styling


Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--reveal-width`                 | Width of the reveal                    | 260px

## Further help

For more information on how to install and run test please go here - [Polymorph elements getting started]

[Polymorph elements getting started]: https://github.com/moduware/polymorph-components/blob/master/INFO.md
