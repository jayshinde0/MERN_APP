import express from 'express';
import "dotenv/config";
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server= http.createServer(app);

// Middleware
app.use(express.json({limit: '4mb'}));
app.use(cors());

app.use("/api/status",(res,req )=> res.send("Server is Live"));

const port = process.env.PORT || 5000;