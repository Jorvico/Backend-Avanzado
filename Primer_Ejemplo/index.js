const express = require('express')
const app = express()
const routes = require('./routes/routes')

const PORT = 3000;
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`El servidor esta en ejecucion en el puerto http://localhost:${PORT}`)
})
