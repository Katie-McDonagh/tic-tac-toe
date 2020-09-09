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
