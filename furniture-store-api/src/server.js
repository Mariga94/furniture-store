/**
 * Server initialization `server.js` is where we create and start the actual
 * HTTP server that listens for incoming requests.
 * It imports the `app` confiugred in `app.js` and uses it handle HTTP requests
 *
 * The primary purpose of `server.js` is to specify he port on which the application
 * will listen for incoming HTTP requests
 */

import app from "./app.js";
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
