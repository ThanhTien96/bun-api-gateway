import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import gateway1Router from './router/gateway1.router';
import gateway2Router from './router/gateway2.router';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



app.use("/gateway2", gateway2Router);
app.use("/gateway1", gateway1Router);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
