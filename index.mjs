import express from "express";
import morgan from "morgan";
import router from "./api/route/route.mjs";
import dotenv from 'dotenv';

import Database from "./api/config/database.mjs";
import MongoConnection from "./api/config/mongo-connection.mjs";

// load .env
dotenv.config();

// initialize mongodb connection
const database = new Database(MongoConnection);

// initialize express
const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(router)

const PORT = process.env.PORT || 5050;

// serve app
app.listen(PORT, async() => {
    await database.connect();
    console.log(`Server is running on port: ${PORT}`)
    app.emit('api_started');
})