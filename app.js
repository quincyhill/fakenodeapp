const express = require('express')

const app = express()

app.get('/', (req, res) => {
  // Just sends over some html from express
  const html = `
  <html>
    <h1>Hello World</h1>
    <p>This is a paragraph</p>
  </html>
  `
  res.send(html)
})

// listen on port 3000, could be any port
app.listen(3000, () => {
  console.log('Listening on port 3000')
})
