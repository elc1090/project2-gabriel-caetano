import express from 'express'
const app = express()
const port = 3000

app.get('/tournaments', (req, res) => {
  res.send('get list of tournaments')
})

app.get('/load-tournament-data/:id', (req, res) => {
  req.params.id
  res.send('load data from the tournament with id = ' + req.params.id)
})

app.get('/check-tournament-loaded/:id', (req, res) => {
  res.send('return data from the tournament with id = ' + req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
