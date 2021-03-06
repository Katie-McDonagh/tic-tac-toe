####public Folder
The public folder is for stuff that doesn’t need compiling but needs the be present in the final built app and during development – for example, you don’t really need to compile HTML files, so the index.html (the template of our app) can go there. You don’t compile favicons, so favicon.ico goes there. Webpack does not read the public folder.

####src Folder

src/index.js is the JS entry point.
It contains all the JS, JSX, CSS etc to run our app, it's all the components, tests and styling: the mind of our app.

####build folder
The build folder is the final built package of files that will be deployed somewhere. To build it, everything in public is copied across, and the JS (+ CSS etc) is compiled to a bundle or bundles which are also written to the folder.

There should be instructions in the README file; if not, there should be commands to run listed in package.json – I’d expect there to be a “start” (bundles everything up for development and opens a server locally so you can see browser) and “build” to build an end product

####.gitignore
This file contains all the files/directories you may want git to leave out when committing code, useful for folders that change according to your local environment that are not essential for the running of the app i.e test results/node_modules/build folder

####package.json
the package.json file is instructions on how to run your app; it lists the packages your project depends on, specifies versions of a package that your project can use using semantic versioning rules
makes your build reproducible, and therefore easier to share with other developers

####babel
A tool to help us compile our JS into the browser, it automatically uses version control to change our codes syntax to suit the capabilities of the browser we are using, allowing us to use more advanced JS in development which babel will version control to suit a browser unable to read more advanced JS

babel-core is the main babel package — We need this for babel to do any transformations on our code

babel-cli allows you to compile files from the command line

.babel.rc file:
preset-react and preset-env are both presets that transform specific flavors of code — in this case, the env preset allows us to transform ES6+ into more traditional javascript and the react preset does the same, but with JSX instead

####webpack
A highly modifiable tool that bundles JS files. Webpack uses loaders to process different types of files for bundling. It also works easily alongside a development server and can for example be configured to reload browser pages on saved changes to React components.

webpack.config.js: this file exports an object with webpack’s configuration. This has a lot of explicit configuration. See the file for more detailed comments

[further reading](https://survivejs.com/webpack/what-is-webpack/)

####hotmodulereplacement
a plug in to allow for automatic refresh of the page (we don't have to reload the server to see all our changes)

####React
src/index.js:
This file access the root element in our DOM , the element with id root in our HTML file.
```
ReactDOM.render(<App />, document.getElementById('root'));
````
As you notice it renders our React application with the render method. Also there is a reference of App object that we imported from the App file.
```
import App from './App';
````
The extension .js (App.js) is omitted because it is automatically addressed by our build workflow.

src/App.js
This is the file for App Component. App Component is the main component in React which acts as a container for all other components.

src/App.css
This is the CSS file corresponding to App Component, main CSS for the app

####jest
Jest is a test runner, provides the conventional methods describe() and it() or test(), and can be used for any JS project. We'll use it and configure it to work as needed.

####lifecyclescripts
scripts are the property of the package.json file, they are scripts that can be run before, during or after development:

prepack is the lifecycle script called before each call to yarn pack. This is typically the place where you'll want to put scripts that build a package - such as transpiling its source.

postpack is called right after yarn pack, whether the call succeeded or not. This is typically the place where you'll clean your working directory from the build artifacts (note that whether to actually clean them or not is purely optional).

prepublish is called before yarn npm publish and similar commands (even before the package has been packed). This is the place where you'll want to check that the project is in an ok state. Because it's only called on prepublish, the prepublish hook shouldn't have side effects. In particular don't transpile the package sources in prepublish, as people consuming directly your repository wouldn't be able to use your project.

postinstall is called after a package got successfully installed on the disk. It is guaranteed.

Note that yarn don't support every single lifecycle script originally present in npm. This is a deliberate decision based on the observation that too many lifecycle scripts make it difficult to know which one to use in which circumstances, leading to confusion and mistakes. We are open to add the missing ones on a case-by-case basis if compelling use cases are provided.

####react testing library
a library we can use to test our react components:
The simplest way to think about testing components in react is that we have to create an element, attach our react-dom tree to the element to then traverse it and make our assertions. A lot of this setup is abstracted away: eg in react-testing-library's render method and query methods.

####virtual DOM
the VDOM is a programming concept where an ideal, or virtual representation of a UI is kept in memory and synced with the real DOM by a library such as React DOM. This process is called reconciliation.

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.




