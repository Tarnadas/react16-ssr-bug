import { renderToString } from 'react-dom/server'
import cheerio from 'cheerio'
import express from 'express'
import http from 'http'
import fs from 'fs'
import path from 'path'

import renderer from './shared'

const app = express()
const server = http.createServer(app)

app.use('/scripts', express.static(path.join(__dirname, './scripts')))
app.get('/', (req, res) => {
  let html = renderer(true, renderToString)
  const index = cheerio.load(fs.readFileSync(path.join(__dirname, './index.html')))
  index('#root').html(html)
  res.end(index.html())
})
server.listen(80, () => {
  console.log('started')
})
