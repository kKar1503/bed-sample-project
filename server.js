// dotenv is a package that allows you to import environmental variables
// from a .env file by default.
// But of course, there is a way to configure further, but that's not needed.
// However, feel free to explore.
require("dotenv").config();

// Because we imported from the dotenv. Any variables that you declared will
// be available under process.env.
// For example, since we declared PORT=3000 in .env, we can actually
// access the PORT variable with process.env.PORT
const PORT = process.env.PORT;

// But always remember that whatever is being passed from dotenv is actually
// string. So since we know that the port is in number type, we will do a parseint
const PORT_NUMBER = parseInt(PORT);

// Importing our app from the src/app.js allow us to do the initialisation right here.
const app = require("./src/app");

// This function just starts the server.
// Without your app.listen(), your server wouldn't start at all,
// this generally serves as the entry point to your project.
// since
app.listen(PORT_NUMBER, () => {
  // the second argument of the listen function is a callback function that
  // gets called when the application is initialised / ready.
  // So usually, I'll put a log here to help tell myself that the application is running
  console.log("Server has started.");

  // Obviously, logging is not the only things you would do here, there's other
  // thing that people will put here, such as initialisation of other things, but
  // that's topic for another day.
});
