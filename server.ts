import app from ".";

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("the server is on localhost:" + port);
});
