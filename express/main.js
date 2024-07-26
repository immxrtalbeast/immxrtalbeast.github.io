import express from "express"
import nodemailer from "nodemailer"
const app = express()
app.set('view engine', 'ejs')
app.use(express.json())

app.use(express.static('D:/Coding/UTA web/assets/css/'))
app.use(express.static('D:/Coding/UTA web/assets/img/'))
app.use(express.static('D:/Coding/UTA web/assets/js/'))
app.get('/', async (req,res) => {
    res.sendFile('D:/Coding/UTA web/index.html')
})


app.post('/api', async (req,res) => {
    const {name, email, number, whatsappbool, emailbool, phonebool} = req.body

    let transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'uta_site@mail.ru',
            pass: '6hPT2WtcDj5EkKNdNX5K',
        },
    });

    let preference = []

    if (whatsappbool == true){
        preference.push('WhatsApp')
    }
    if (emailbool == true){
        preference.push('E-Mail')
    }

    if (phonebool == true){
        preference.push('Телефон')
    }
    const mailOptions = {
        from: 'uta_site@mail.ru',
        to: 'imnomakj@mail.ru',
        subject: 'Новая заявка!',
        text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${number}\nСвязь: ${preference}`
    };

    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json({ success: false, error });
        }
        res.json({ success: true });
    });

})



app.get('/zomb',(req, res) =>{
    res.send('ЗОМБУУУ')
})




const PORT = 3000
const HOST = 'localhost'
app.listen(PORT, HOST, () => {
    console.log('Сервер запущен!')
})