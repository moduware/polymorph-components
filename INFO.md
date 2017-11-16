## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Getting Started:
You can clone the desired repository to create a local copy on your computer.

  1. Navigate to the main page of the repository in Github

  2. Click **Clone or download** and copy the clone URL for the repository

  3. Open your Terminal and change the current working directory to the location where you want the cloned directory to be made and Type **`git clone`**, and then paste the URL you copied in Step 2.
  ```bash
  $ git clone https://github.com/moduware/morph-overlay.git
  ```
    **Please change morph-ovelay with your desired component that you want to clone and use.

  4. Then **`$ cd morph-overlay/`**

  5. Run **`$ bower install`** to install all packages in your bower.json and any packages that it depends on in the local bower_components folder
    ** If you don't have bower installed in your machine, please refer to this [page].(https://bower.io/)

## Running A Local Server
  To Run local server on your machine

  1. Open another tab  or window of your terminal

  2. Use **`polymer serve`**

  ```bash
    $ polymer serve
  ```

  - and if running correctly, this message will appear

  ```bash
  info:   Files in this directory are available under the following URLs
        applications: http://127.0.0.1:8081
        reusable components: http://127.0.0.1:8081/components/morph-overlay/
  ```

  - Copy and paste the reusable components URL `http://127.0.0.1:8081/components/morph-overlay/` to your browser and open developer console and select either an IOS or Android device to see the component's render correctly.

  - **Note**: You will not see the component's render properly unless you have set the device type (iOS or Android).

  3. **Important:** Running this local server is needed for running Polymer Test. More about this below.

## Test
  - This `<morph-overlay> element` is ready to be tested using [**web-component-tester**][WCT] or WCT for short. Our tests is setup to use `--expanded: true` configuration for creating a more readable output of test results in the console. It will show all the test that were run and also show all the test that failed if any. Additional configuration for WCT can be found and further configured in the `wct-conf.json` file in the root of `<morph-overlay>` directory.

  - To start **Polymer Unit Test** you can run **`$ polymer test`**

    **Reminder:** A local server is needed to be started and running for the test to properly run.

  - For brief overview of Polymer Testing please go to this page [Polymer Test][Polymer Test]

  - To create new test, change to the **test/** directory. See file structure below.

    ```bash
    morph-overlay/
    │
    ├── bower-components/
    ├── demo/
    ├── test/
    │    │
    │    └── morph-overlay_test.html
    │
    ├── morph-overlay.html
    │
    └── README.md
    ```
  - Then either add new test to existing fixture and context, or add new fixture and create new test context for new property or group of tests. Refer to [WCT][WCT] documentation for more detailed explanation about fixtures.

  - Example test for `<**morph-overlay**>`

```html
    example test fixtures
    <test-fixture id="BasicAndroidFixture">
      <template>
        <morph-overlay platform="android"></morph-overlay>
      </template>
    </test-fixture>

    <test-fixture id="BasicIosFixture">
      <template>
        <morph-overlay platform="ios"></morph-overlay>
      </template>
    </test-fixture>

    other fixtures are omitted...

    <script>
    describe('morph-overlay', function() {

      //Declares background-color for overlay testing suite.
      const iosBackgroundColor = 'rgba(0, 0, 0, 0)';
      const androidBackgroundColor = 'rgba(0, 0, 0, 0.2)';

      // testing default Android overlay properties
      context('Android Default Overlay', function() {
        // declares variable for overlay in this scope
        let overlay, style;


        // Create a test fixture
        beforeEach(function() {
          // Assigning overlay fixture for this context.
          // This will automatically removed on the teardown phase of this test context!
          overlay = fixture('BasicAndroidFixture');

          // getting actual CSS of overlay rendered in the shadow DOM for testing purposes
          style = getComputedStyle(overlay);
        });

        it('instantiating the overlay on android platform with default properties works', function() {
          // testing for default display and which platform was set in html markup
          expect(style.display).to.be.equal('none');
          expect(overlay.platform).to.be.equal('android');
        });

      });

    });
    </script>
```

  - For brief overview of Polymer Testing please go to this page [Polymer Test][Polymer Test]
  - To learn more about the other Polymorph Components, please check out this [repository][Main Page].

[Main Page]: https://github.com/moduware/polymorph-components

[WCT]: https://github.com/Polymer/web-component-tester  

[Polymer Test]: https://www.polymer-project.org/2.0/docs/tools/tests
