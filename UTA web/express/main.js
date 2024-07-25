import express from "express"


const app = express()
app.set('view engine', 'ejs')
app.use(express.json())

app.use(express.static('D:/Coding/UTA web/assets/css/'))
app.use(express.static('D:/Coding/UTA web/assets/img/'))
app.use(express.static('D:/Coding/UTA web/assets/js/'))
app.get('/', async (req,res) => {

    res.render('D:/Coding/UTA web/index.ejs')
})

const PORT = 3000
const HOST = 'localhost'
app.listen(PORT, HOST, () => {
    console.log('Сервер запущен!')
})