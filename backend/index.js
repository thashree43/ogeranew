import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import { connectdb } from "./services/mongoconnect.js"; // Import the connectdb function
import route from "./routes/clientroute.js";
import adminroute from "./routes/adminroute.js";

// Call the connectdb function
connectdb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieparser);
app.use("/", route);
app.use("/admin", adminroute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Backend has been connected");
  console.log(`http://localhost:${port}`);
});
