const express = require('express')
const checklistRouter = require('./src/routes/checklist')

const app = express()
app.use(express.json())

app.use('/checklists', checklistRouter)

app.listen(3000, () => {
  console.log('Server on, listening port 3000')
})
