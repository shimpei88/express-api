const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/vi/', (req, res) => {
    res.json({
        msg: 'Hello fxxkin the world'
    })
})


const port = process.env.PORT || 3000

app.listen(port, () => console.log(`listen on port ${port}`))