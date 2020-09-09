const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  //entry: tells Webpack where our application starts and where to start bundling our files.
  mode: "development",
  //mode: lets webpack know we’re working in development mode.
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  /*
  module: is an object to define how our exported javascript modules are transformed and which 
  ones are included according to the given array of rules. The first rule is all about transforming 
  our ES6 and JSX syntax. The test and exclude properties are conditions to match file against. 
  In this case, it’ll match anything outside of the node_modules and bower_components directories. 
  Since we’ll be transforming our .js and .jsx files as well, we’ll need to direct Webpack to use Babel. 
  Finally, we specify that we want to use the env preset in options. The next rule is for processing CSS. 
  Since we’re not pre-or-post-processing our CSS, we just need to make sure to add style-loader and css-loader 
  to the use property. css-loader requires style-loader in order to work. loader is a shorthand for the use property,
  when only one loader is being utilized.
  */
  resolve: { extensions: ["*", ".js", ".jsx"] },
  //resolve: allows us to specify which extensions Webpack will resolve — this allows us to import modules without needing to add their extensions.
  output: {
    path: path.resolve(__dirname, "build/"),
    publicPath: "/build/",
    filename: "bundle.js"
  },
  /*
  output tells Webpack where to put our bundled code. The publicPath property specifies what directory the bundle 
  should go in, and also tells webpack-dev-server where to serve files from. The publicPath property is a special 
  property that helps us with our dev-server. It specifies the public URL of the the directory — at least as far 
  as webpack-dev-server will know or care. If this is set incorrectly, you’ll get 404’s as the server won’t be 
  serving your files from the correct location!
  */
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/build/",
    hotOnly: true
  },
  /*
  devServer: doesn’t require much for our needs — just the location we’re serving static files from (such as our index.html) 
  and the port we want to run the server on. Note that devServer also has a publicPath property. This publicPath tells the 
  server where our bundled code actually is.
  */
  plugins: [new webpack.HotModuleReplacementPlugin()]
  /*
  plugins: allows for use of additional tools as needed. Since we want to use Hot Module Replacement so we don’t have to 
  constantly refresh to see our changes, all we do for that in terms of this file is instantiate a new instance of the plugin 
  and make sure that we set hotOnly to true We still need to set up one more thing in React before HMR works, though.
  */
};