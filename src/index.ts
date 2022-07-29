import express from 'express'

const app = express()

app.get('', (req,res) => {
  res.send('Hello Word!')
})
const port = 3333

app.listen(port,() => {
  console.log(`Server is runner on port ${port}`)
})
