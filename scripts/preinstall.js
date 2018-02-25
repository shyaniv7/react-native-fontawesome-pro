var prompt = require('prompt');
var shell = require('shelljs');

var schema = {
    properties: {
      token: {
        //pattern: /^[a-zA-Z\s\-]+$/,
        message: "Please enter your FontAwesome Pro token",
        required: true,
      }
    }
  };
//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(schema, function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  token: ' + result.token);


  //shell.exec('npm config set @fortawesome:registry=https://npm.fontawesome.com/' + result.token);
  shell.echo("@fortawesome:registry=https://npm.fontawesome.com/" + result.token).toEnd(".npmrc");
  shell.exec("yarn add @fortawesome/fontawesome-pro-light @fortawesome/fontawesome-pro-regular @fortawesome/fontawesome-pro-solid --ignore-scripts");
});
