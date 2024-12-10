import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import analysisRoutes from "./routes/analysis";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/api", analysisRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("AI Code Analyzer Backend Running");
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
