import path from 'path'
import fs from 'fs'
import React from 'react'
import express from 'express'
import ReactDOMServer from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { App } from '../src/App'

const PORT = 8080
const app = express()
const router = express.Router()

const serverRenderer = (req, res, next) => {
  const sheet = new ServerStyleSheet()
  const styles = sheet.getStyleTags()
  fs.readFile(path.resolve('./dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send('An error occurred')
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">
          ${styles}
          ${ReactDOMServer.renderToString(sheet.collectStyles(<App />))}
        </div>`
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
