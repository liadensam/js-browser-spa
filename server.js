const express = require("express");
const path = require("path");

const app = express();

app.use(
  //we are connecting it with static so we can see the pages, the js view files
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

//this is resolving the paths, every single path-page is going back to the html file so thus it is Single Page Application
//any path is going back to the root
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

//my server is running on this port, I changed myself, it does not be this number 5501
app.listen(process.env.PORT || 5501, () => console.log("Server running..."));
