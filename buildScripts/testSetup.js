//This file isn't transpiled, so must use CommonJS and ES5

//register babel to transpile before our test run.
require("@babel/register")({
    // This will override `node_modules` ignoring - you can alternatively pass
    // an array of strings to be explicitly matched or a regex / glob
    ignore: [],
  });

//disable webpack features that Mocha doesn't understand.
require.extension['.css'] = function() {};