---
title: "morph-sidebar"
---

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/PolymerElements/paper-progress)

Sidebar that morphs for current mobile OS.

`morph-sidebar` component changes its appearance based on the whether the platform or device is IOS or Android.

## Getting Started

For the information about how to clone the desired repository, running the local server and testing, please refer to Polymorph elements getting started docs at the end of this repository.

## Demo

- Here is a quick demo of `<morph-sidebar>`

  <p>On IOS platform</p>

  <p align="center">
    <img src="/logos/poly-logo-3.png" alt="Morph Sidebar element" />
  </p>

  <p>On Android platform</p>

  <p align="center">
    <img src="/logos/poly-logo-1.png" alt="Morph Sidebar element" />
  </p>

## Styling

  -For Android platform;

  Custom property                  | Description                            | Default
  ---------------------------------|----------------------------------------|--------------------
  `--app-drawer-width`             | Width of the app drawer                | 260px
  `--morph-sidebar-scrim-background-android`  | Background color for scrim  | rgba(0, 0, 0, 0.2)
  `--app-drawer-scrim-background`       | App-drawer scrim color        | var(--morph-sidebar-scrim-background-android)

  -For IOS platform;

  Custom property                  | Description                            | Default
  ---------------------------------|----------------------------------------|--------------------
  `--app-drawer-width`             | Width of the app drawer                | 260px
  `--morph-sidebar-scrim-background-ios`  | Background color for scrim  | rgba(0, 0, 0, 0)
  `--app-drawer-scrim-background`       | App-drawer scrim color        | var(--morph-sidebar-scrim-background-ios)

## Attributes

  | Custom Attribute |   Type  | Description                                                                                                                      | Default     |
  |:----------------:|:-------:|----------------------------------------------------------------------------------------------------------------------------------|-------------|
  |  **`align`**  | String  | Assigns where to display side bar.<br> `left` or `right`| **`left`**  |
  |    **`opened`**   | Boolean | Indicates if the side bar is close or open | **`false`**      |
  |  **`transition-duration-ios`**  | String  | Transition of side bar opening in ios | **`400`**  |
  |    **`transition-duration-android`**   | String | Transition of side bar opening in android | **`300`**  |  
  |    **`transition-duration-web`**   | String | Transition of side bar opening in web | **`200`**  |   

## How to use our **`<morph-sidebar>`** component

- We can wrap the whole content with [**app-drawer-layout**][app-drawer-layout] component to make it work with other `<app-layout>` elements like `<app-header>`. We can then use the `drawer-toggle` attribute and place them on any children of the `<app-drawer-layout>` and when click it toggles our sidebar open and close.

    ```html

    <body>

      <app-drawer-layout fullbleed force-narrow>

        <morph-sidebar slot="drawer" align="left" swipe-open>
          <p>Left morph-sidebar</p>
          <p>Simulated with cover animation and shadow for android. And no shadow if iOS.</p>
        </morph-sidebar>

        <app-header-layout>
          <app-header slot="header">
            <app-toolbar>
              <div main-tittle>morph-sidebar</div>
            </app-toolbar>
          </app-header>
        </app-header-layout>

        <div>
          <h4 drawer-toggle>Toggle Left Sidebar</h4>
        </div>

      </app-drawer-layout>

      <script>

        toggleDrawer = function(name) {
          var drawer = document.getElementById(name + 'Sidebar');
          drawer.toggle();
        };

      </script>

    </body>

    ```

- We may use two (2) `<morph-sidebar>` panels at the same time, one left and one right panel. `align` defaults to `left` when not specified.

    ```html

    <body>

      <morph-sidebar id="leftSidebar" align="left" swipe-open>
        <p>Left morph-sidebar</p>
        <p>Simulated with cover animation and shadow for android. And no shadow if iOS.</p>
      </morph-sidebar>

      <morph-sidebar id="rightSidebar" align="right" swipe-open>
        <p>Right morph-sidebar</p>
        <p>Simulated with cover animation and shadow for android. And no shadow if iOS.</p>
      </morph-sidebar>

      <div>
        <h4 onclick="toggleDrawer('left')">Toggle Left Sidebar</h4>
      </div>

      <div>
        <h4 onclick="toggleDrawer('right')">Toggle Right Sidebar</h4>
      </div>

      <script>

        toggleDrawer = function(name) {
          var drawer = document.getElementById(name + 'Sidebar');
          drawer.toggle();
        };

      </script>

    </body>

    ```

  - We can also use two (2) `<morph-sidebar>` panels with `app-drawer-layout` by doing a nested `app-drawer-layout` setup. We can use only the drawer-toggle attribute on the outer `app-drawer-layout` children. We need to use other ways to open/close the inner `<morph-sidebar>` (which is our right sidebar panel in this example), like using javascript for our example below.

  ```html

   <body>

    <app-drawer-layout fullbleed force-narrow>

      <morph-sidebar slot="drawer" align="left" swipe-open>
        <p>Left morph-sidebar</p>
        <p>Simulated with cover animation and shadow for android. And no shadow if iOS.</p>
      </morph-sidebar>

      <div>
        <h4 drawer-toggle>Toggle Left Sidebar</h4>
      </div>

      <app-drawer-layout force-narrow>

        <morph-sidebar id="rightSidebar" slot="drawer" align="right" swipe-open transition-duration-ios="500">
          <p>Right morph-sidebar</p>
          <p>Simulated with cover animation and shadow for android. And no shadow if iOS.</p>
          <p>This sidebar animation duration is change to 500</p>
        </morph-sidebar>

        <div>
          <h4 onclick="toggleDrawer('right')">Toggle Right Sidebar</h2>
        </div>

      </app-drawer-layout>

    </app-drawer-layout>

    <script>

      toggleDrawer = function(name) {
        var drawer = document.getElementById(name + 'Sidebar');
        drawer.toggle();
      };

    </script>

  </body>

  ```

  **ToDo: Implement the reveal animation using this new `morph-sidebar`**

  - `<morph-sidebar>` has two animation when opening and closing. The default animation of the sidebar is `cover`. It covers the morph-view element when it opens.

  - The other animation is called `reveal` where [**morph-view**][Morph View] moves out and reveals the `<morph-sidebar>` under it. `<morph-view>` moves out of the way to accommodate the width of our sidebar. To use `reveal` we add reveal attribute to `<morph-view>` component.

    ```javascript

    function closeRightSidebarWithReveal() {
      let view = document.getElementById('mainView');
      view.removeAttribute('reveal');
    }

    document.addEventListener('DOMContentLoaded', function(event) {
      document.getElementById('sidebarRight').addEventListener('open-changed', closeRightSidebarWithReveal);
    });

    ```

[Morph View]: https://github.com/moduware/morph-view

[app-drawer-layout]: https://github.com/PolymerElements/app-layout/tree/master/app-drawer-layout

## Further help

For more information on how to install and run test please go here - [Polymorph elements getting started]

[Polymorph elements getting started]: https://github.com/moduware/polymorph-components/blob/master/INFO.md
