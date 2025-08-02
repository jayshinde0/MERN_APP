import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { connectDB } from "./lib/db.js";
import user from "./models/user.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const server = http.createServer(app);

// Middleware
app.use(express.json({ limit: "4mb" }));
app.use(cors());

// Route setup
app.get("/api/status", (req, res) => {
  res.send("Server is Live");
});
app.use("/api/auth", userRoutes);

// Connect to MongoDB
await connectDB();

// Start Server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
