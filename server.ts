import express from "express";
import { Request, Response } from "express";

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "working",
  });
});

app.listen(port, () => {
  console.log("The server is at http://localhost:" + port);
});
