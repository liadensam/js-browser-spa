import express from "express";
import path from "path";

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

app.get("/frontend/*", (req, res) =>{

  /*Any path at all, that is the /* will go back to the route, will send the index.html I have in the folder frontend. So If I go to whatever page from nav, so no matter what path I send to the server, they all will go to the this index.html. This is important to make this single page application.*/
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})


app.listen(process.env.PORT || 5500, () => console.log("Server running..."));