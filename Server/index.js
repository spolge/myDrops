const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');
const cors = require('cors');
const main = require('./model/index')

app.use(cors({
  origin: '*'
}));
app.use(express.json());
app.use(router);

main()
  .then(() => {
    console.log('successfully connected to database');
  })
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
