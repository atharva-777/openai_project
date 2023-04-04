import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'
import {openai} from '../index.js'

dotenv.config();

const router  = express.Router()

router.post('/text',async (req,res)=>{
    try{
        const {text,activeChatId} = res.body;
    }catch{
        console.log('error',error)
        res.status(500).json({error:error.message})
    }
})

export default router;