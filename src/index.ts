import express from 'express'

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/', (_req, res) => {
  res.send('ready')
})

app.get('/ping', (_req, res) => {
  res.send('pongggg')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
