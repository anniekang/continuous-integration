const app = require('./app')
const { PORT } = process.env

app.listen(PORT || 3000, () => {
  console.log('Listening on port ${PORT || 3000}')
})
