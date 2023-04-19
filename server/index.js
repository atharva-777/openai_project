import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import { Configuration,OpenAIApi } from 'openai'
import openAiRoutes from './routes/openai.js'
import authRoutes from './routes/auth.js'
// import openAiRoutes from "./routes/newopenai.js";

// configs

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

 
// openai setup

const configuration = new Configuration({
  apiKey: process.env.OPEN_API_KEY,
});
export const openai = new OpenAIApi(configuration)





// router

app.use('/openai',openAiRoutes)
app.use('/auth',authRoutes)

// listening

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Listening to port : ${PORT}`)
})
