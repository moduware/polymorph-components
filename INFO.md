# Polymorph Components Guide - Polymer 3.0

This getting started guide is for out Morph Components recently updated to `Polymer 3.0`

- The `Polymer 3.0` version resides in the `polymer3` branch until merge to our `master` branch

## Install the Polymer-CLI

First, make sure you have installed the [Polymer CLI](https://www.npmjs.com/package/polymer-cli).

**Our examples are demonstrated with specific morph components such as `<morph-button>`. Please change them with your desired component that you want to clone and use**

## Usage

Installation

```bash

  npm install --save @moduware/morph-button

```

In an HTML file

```html

  <html>
    <head>
      <script type="module">
        import '@moduware/morph-button';
      </script>
    </head>

    <body>
      <morph-button filled big>submit</morph-button>
    </body>
  </html>

```

In a Polymer 3 element

```javascript

  import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

  import '@moduware/morph-button.js';

  class ExampleElement extends PolymerElement {
    static get template() {
      return html'
        <morph-button filled big >submit</morph-button>
      ';
    }
  }

  customElements.define('example-element', ExampleElement);

```

## Getting Started on development

You can clone the desired repository to create a local copy on your computer.

  1. Navigate to the main page of the repository in Github

  2. Click **Clone or download** and copy the clone URL for the repository

  3. Open your Terminal and change the current working directory to the location where you want the cloned directory to be made and Type `git clone`, and then paste the URL you copied in Step 2.

  NOTE: For this step we will only clone the `polymer3` branch.

  As an example, we will clone our `<morph-button>` component `polymer3` branch.

  ```bash

  git clone --single-branch -b master https://github.com/moduware/morph-button.git

  ```

  4. Then **`$ cd morph-button/`**

  5. Run **`$ npm install`** to install all packages in your `package.json` and any packages that it depends on in the local `/node_modules` folder

## Running A Local Server

  To Run local server on your machine

  1. Open another tab  or window of your terminal

  2. Use `npm start` or `polymer serve --npm --module-resolution=node`

  and if running correctly, this message will appear

  ```bash
  info:   Files in this directory are available under the following URLs
        applications: http://127.0.0.1:8081
        reusable components: http://127.0.0.1:8081/components/morph-button/
  ```

### Running the demo locally

  Copy and paste the reusable components URL `http://127.0.0.1:8081/components/morph-button/` to your browser and open developer console and select either an IOS or Android device to see the component's render correctly.

  **Note**: You will not see the component's render properly unless you have set the device type (iOS or Android).

  3. **Important:** Running this local server is needed for running Polymer Test. More about this below.

## Test

NOTE: Due to current limitations by Polymer3 running test in the CLI or terminal, please run server and view all test in a browser.

- To start **Polymer Unit Test** you can run `npm start` and go to `http://127.0.0.1:8081/test/morph-button_test.html` and inspect element and view the console.

Once the issues of running test in the terminal is wrinkle free, we can run our morph component tests using [**web-component-tester**][WCT] or WCT for short. Our tests is setup to use `--expanded: true` configuration for creating a more readable output of test results in the console. It will show all the test that were run and also show all the test that failed if any. Additional configuration for WCT can be found and further configured in the `wct-conf.json` file in the root of your desired component's directory.

A local server is needed to be started and running for the test to properly run.

- Morph Components are also built with wct-instabub for code coverage. If you have polymer-cli installed, run the test on the terminal with command 'wct'

This command will run the test and give test coverage report on the terminal and also have '/coverage' folder for code test coverage related files

- To create new test, change to the **test/** directory. See file structure below.

  **As an example, we will use our `<morph-button>` component.**

  ```bash
  morph-button/
  │
  ├── node_modules/
  ├── demo/
  ├── test/
  │    │
  │    └── morph-button_test.html
  │
  ├── morph-button.js
  │
  └── README.md
  ```

  - Then either add new test to existing fixture and context, or add new fixture and create new test context for new property or group of tests. Refer to [WCT][WCT] documentation for more detailed explanation about fixtures.

  - Example test for **`<morph-button>`**.

```html
    example test fixtures
    <test-fixture id="BasicAndroidFixture">
      <template>
        <morph-button platform="android">Android</morph-button>
      </template>
    </test-fixture>

    <test-fixture id="BasicIosFixture">
      <template>
        <morph-button platform="ios">Submit</morph-button>
      </template>
    </test-fixture>

    other fixtures are omitted...

    <script>
      describe('morph-button', function() {
        // declare colors for testing in the whole button testing suite
        const androidBlue = 'rgb(33, 150, 243)';
        const iosblueBackground = 'rgb(0, 122, 255)'
        const white = 'rgb(255, 255, 255)';
        const iosBorderRadius = '27px';

        // testing default Android Buttons properties
        context('Android Default Usual Buttons', function() {
          // declare variable for button in this context only
          let button, morphRipple, rippleStyle;

          // Create a test fixture
          beforeEach(function() {
            // assigning button fixture for this context. This will automatically removed on the teardown phase of this test context
            button = fixture('BasicAndroidFixture');

            // getting style our morph-ripple
            morphRipple = button.root.querySelector('morph-ripple');
            rippleStyle = getComputedStyle(morphRipple);
          });

          it('instantiating the button on android platform with default properties works', function() {
            // testing for default colors and which platform was set in html markup
            expect(button.color).to.be.equal('blue');
            expect(button.innerHTML).to.be.equal('Android');
          });

          it('should have <morph-ripple> display = "block" ', function() {
            expect(rippleStyle.display).to.be.equal('block');
          });

        });
      })

    </script>
```

- For brief overview of Polymer Testing please go to this page [Polymer Test][Polymer Test]

- To learn more about the other Polymorph Components, please check out this [repository][Main Page].

[Main Page]: https://github.com/moduware/polymorph-components

[WCT]: https://github.com/Polymer/web-component-tester  

[Polymer Test]: https://www.polymer-project.org/3.0/docs/tools/tests
