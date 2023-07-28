import express from "express";
import morgan from "morgan";
import router from "./api/route/route.mjs";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(router)

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
    app.emit('api_started');
})