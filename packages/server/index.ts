require('dotenv').config()
import { Request, Response } from "express"
const routes = require("./router")
const path = require('path');
const setMiddleware = require("./middleware/index")
const express = require('express')
const MyDataSource = require('./config/database')
const app = express()

app.use(express.json());
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

setMiddleware(app)

app.get('/', (req: Request, res: Response) => {
  res.send('ok')
})


app.use(routes);


MyDataSource.initialize()
  .then(() => {
    // here you can start to work with your database
    console.log("database initialized successfully")
  })
  .catch((error) => console.log(error))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})