import express from 'express';
import searchModule from './Routes/Route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(express.json());

app.use(cors());
app.use("/", searchModule)

app.listen(port, () => {
  console.log(`Backend is running on this port ${port}`);
});