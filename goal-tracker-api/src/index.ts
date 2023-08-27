import app from "./app";

const port = process.env.PORT || 4010;

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`Server listening on port ${port}`);
});
