import express from 'express'
import greetRoute from './route/greet'
const app = express()

app.use('/greet', greetRoute)

app.listen(8080, () => {
  console.log('listening on port 8080')
})