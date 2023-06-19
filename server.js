import express from "express";
import cors from "cors";
import informList from "./router/router.js";
import { mongoConnect } from "./Mongo-network/Connect.js";
const app = express();
const Port = 8000;

mongoConnect();
app.use(express.json());
app.use(cors());

app.use("/api/information", informList);

app.listen(Port, (error) => {
  error
    ? console.log(error.message)
    : console.log(`server is running in port ${Port}`);
});
