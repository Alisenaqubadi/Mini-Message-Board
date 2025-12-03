import express from 'express'
import 'dotenv/config'
import path from 'path';
import { fileURLToPath } from 'url';

import rootRouter from './routes/index.js'
import newMessageRouter from './routes/newMessage.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// Serve CSS and other static assets from the `src/css` directory at `/css` URL
app.use('/css', express.static(path.join(__dirname, 'css')))

app.use('/', rootRouter)
app.use('/', newMessageRouter)


const port = process.env.PORT || 3000;
app.listen(port , ()=> {
    console.log(`Server is running on port ${port}`)
})