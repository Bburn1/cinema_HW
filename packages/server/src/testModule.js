const sum = (a, b) => a + b

module.exports = sum

// app.use((req, res, next) => {
//   console.log(`1_Middleware`)
//   next()
// })

// app.use('/about', (req, res, next) => {
//   console.log(`About_Middleware`)
//   // next()
// })

// app.get('/', (req, res) => {
//   console.log(`home page`)
//   res.send('Welcome on home page')
// })

// app.get('/about', (req, res) => {
//   console.log(`about page`)
//   res.send('Welcome on about page')
// })

// app.get('/contact', (req, res) => {
//   console.log(`Contact page`)
//   res.send('Welcome on contact page')
// })

// const http = require('http')

// const host = '127.0.0.1'
// const port = 5000

// const server = http.createServer((req, res) => {

//   console.log('HEADERS', req.headers)
//   console.log('URL', req.url)
//   console.log('METHOD', req.method)

//   res.statusCode = 200
//   res.setHeader('UserId', 10)
//   res.setHeader('Content-Type', 'text/html')
//   res.write('<h1>Node JS<h1>')
//   res.end()
// })

// server.listen(port, host, () =>
//   console.log(`server has been listenng at ${host}:${port}`)
// )
