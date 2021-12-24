const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('DB Connection Successfull'))
  .catch(err => console.log(err))

app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log('Backend server is running')
})
