// address of this connected to the network is
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require("express");

const app = express();

const PORT = 8383;

let data = ["Sahil"];

// MIDDLEWARE
app.use(express.json());

// ENDPOINT - http verbs (methods) && routes (or paths)
// the method informs the nature of the request and the route is a further subdirectory
//* baiscally we direct the request to the body of code to respond appropriately, and these location or routes are called endpoints

// Type - 1 website endpoints (for sending back HTML and they typically come when a user enteres a URL in the browser)

app.get("/", (req, res) => {
  // this is endpoint number 1 - /
  //   console.log("Yaya I hit an endpoint", req.method);
  //   res.sendStatus(201);

  //   res.send("<h1>Homepage</h1>");
  console.log("User requested the hompage website");
  res.send(
    `
    <body
    style="background: black;
    color: white">
        <h3>Data:</h3>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">Dashboard</a>
    </body>
    <script>
    console.log("This is my script")
    </script>`
  );
});

app.get("/dashboard", (req, res) => {
  console.log("Now I hit the /dashboard endpoint");
  res.send(`
    <body>
    <h3>Dashboard</h3>
    <a href="/">Home</a>
    </body>
    `);
});

// Type - 2 API endpoints (non visual)

// CRUD-method: create-post, read-get, update-put, delete-delete

app.get("/api/data", (req, res) => {
  console.log("this one is for data");
  res.status(599).send(data);
});

app.post("/api/data", (req, res) => {
  // someone wants to create a user
  //  for example: when they click a signup button
  // the users clicks the signup button after entering their credetials, and their browser is wired up to send out a network request to the server to handle that action
  const newEntry = req.body;
  //   console.log(newEntry);
  data.push(newEntry.name);
  res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
  data.pop("We deleted the last entry");
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
