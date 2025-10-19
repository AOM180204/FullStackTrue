import express from "express"
import "dotenv/config"
import {router} from "./Routes/routes.js";
import cors from "cors";
const app = express()
const port = process.env.PORT || 3000
app.use(cors({
    origin: 'http://localhost:4200', // Angular
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));




app.use(express.json())
app.use("/", router)

app.listen(3000)