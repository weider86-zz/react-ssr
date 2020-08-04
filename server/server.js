const path = require('path')
const fs = require('fs')
const express = require('../node_modules/express')
const React = require('../node_modules/react')
const ReactDOMServer = require('../node_modules/react-dom/server')
import { App } from '../src/App'

const PORT = 8080
const app = express()
const router = express.Router()

const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
      )
    )
  })
}
router.use('^/$', serverRenderer)

router.use(express.static(path.resolve(__dirname, '..', 'dist')))

app.use(router)

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`)
})
