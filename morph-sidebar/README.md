# \<morph-sidebar\>

  Sidebar that morphs for current mobile OS

## Install the Polymer-CLI

  First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. we will use `polymer serve` to serve your element locally so we can see how our elements works. 

## Getting started

  You can clone the repository to create a local copy on your computer.

  1. Navigate to the main page of the repository in Github - [Main Page in Github][Main Page]

  2. Click **Clone or download** and copy the clone URL for the repository

  3. Open your Terminal and change the current working directory to the location where you want to clone this directory and Type **`git clone`**, and then paste the URL you copied in Step 2.
    ```
    $ git clone https://github.com/nexpaq/polymorph-components.git
    ```

  4. Then **`$ cd morph-sidebar/`**

  5. Run **`$ bower install`** to install all packages in your bower.json and any packages that it depends on in the local bower_components folder.
  
## Running A Local Server

  To run local server on your machine

  1. Open another tab  or window of your terminal

  2. Use **`polymer serve`** 

  ```bash
    $ polymer serve
  ```

  - and if running correctly, this message will appear

  ```bash
  info:   Files in this directory are available under the following URLs
        applications: http://127.0.0.1:8081
        reusable components: http://127.0.0.1:8081/components/morph-sidebar/
  ```

  - Copy and paste the reusable components URL `http://127.0.0.1:8081/components/morph-sidebar/` to your browser and open developer console and select either an IOS or Android device to see the sidebar render correctly.

  3. **Important:** Running this local server is needed for running Polymer Test. More about this below. 


## Running Tests
  - This `<morph-sidebar> element` is ready to be tested using [**web-component-tester**][WCT] or WCT for short. Our tests is setup to use `--expanded: true` configuration for creating a more readable output of test results in the console. It will show all the test that were run and also show all the test that failed if any. Additional configuration for WCT can be found and further configured in the `wct-conf.json` file in the root of `<morph-button>` directory.

  - To start **Polymer Unit Test** you can run **`$ polymer test`** 

  **Reminder:** A local server is needed to be started and running for the test to properly run. 

  - For brief overview of Polymer Testing please go to this page [Polymer Test][Polymer Test]

  - To create new test, change to the **test/** directory.

    ```
    $ polymer test
    ```

  - Then either add new test to existing fixture and context, or add new fixture and create new test context for new property or group of tests. Refer to [WCT][WCT] documentation for more detailed explanation about fixtures. 

  - For brief overview of Polymer Testing please go to this page [Polymer Test][Polymer Test]

## Usage Summary

  ### How to use our **<morph-sidebar>** component

  - Our **`<morph-sidebar>`** has two properties that we are going to use to setup and use our sidebar

    1. `side` - use to choose where to display sidebar, `left` or `right`. It is set to `left` by default when `side` is not added to HTML markup

      ```javascript

      static get properties() {
        return {
          side: {
            type: String,
            value: "left",
            reflectToAttribute: true
          },

          // code omitted for brevity...
        };
      }
      ```

    2. open - takes a Boolean value and use to indicate if the side bar is close or open. also used to toggle our sidebar from close to open and close again using javascript on the page

      ```javascript

      static get properties() {
        return {
          // code omitted for brevity
          open: {
            type: Boolean,
            value: false,
            notify: true,
            reflectToAttribute: true
          }
        };
      }

      ```

  - We may use 2 panels at the same time, one left and one right panel. `side` defaults to `left` when not specified. 

    ```html

    <!-- left sidebar -->
    <morph-sidebar id="sidebarLeft">
      <p>Left Panel content here</p>
    </morph-sidebar>

    <!-- right panel -->
    <morph-sidebar side="right" id="sidebarRight">
      <p>Right Panel content here</p>
    </morph-sidebar>

    ```

  - We need to wrap the whole body with our [**<morph-view>**][Morph View] component to make it work properly.

    ```html

    <body>
      <!-- morph-view should be inside html body -->
      <morph-view id="mainView"> 
        <h3><morph-sidebar> demo</h3>

        <button id="sidebarLeftToggler">Toggle Left Sidebar</button>
        <button id="sidebarRightToggler">Toggle Right Sidebar</button>
      </morph-view>

      <!-- morph-sidebar should be outside morph-view and inside html body -->
      <morph-sidebar id="sidebarLeft" platform="android">
        <p>Left Panel content here</p>
      </morph-sidebar>

      <morph-sidebar side="right" id="sidebarRight">
        <p>Right Panel content here</p>
      </morph-sidebar>
    </body>

    ```

  - `<morph-sidebar>` has two animation when openning and closing. The default animation of the sidebar is `cover`. It covers the morph-view element when it opens. 

  - The other animation is called `reveal` where morph-sidebar moves in and morph-view slides with it. `<morph-view>` moves out of the way to accomodate the width of our sidebar. To use `reveal` we add reveal attribute to `<morph-view>` component.

    ```html

    function closeRightSidebarWithReveal() {
      let view = document.getElementById('mainView');
      view.removeAttribute('reveal');
    }

    document.addEventListener('DOMContentLoaded', function(event) {
      document.getElementById('sidebarRight').addEventListener('open-changed', closeRightSidebarWithReveal);
    });

    ```


[Main Page]: https://github.com/nexpaq/polymorph-components

[WCT]: https://github.com/Polymer/web-component-tester  

[Polymer Test]: https://www.polymer-project.org/2.0/docs/tools/tests

[Main Page]: https://github.com/nexpaq/polymorph-components

[Morph View]: https://github.com/nexpaq/polymorph-components/tree/develop/morph-view