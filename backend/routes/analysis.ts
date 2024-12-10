import express, { Request, Response } from "express";
import { analyzeCode } from "../services/aiService";

const router = express.Router();

router.post("/analyze", async (req: Request, res: Response) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: "Code snippet is required" });
  }

  try {
    const result = await analyzeCode(code);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to analyze the code" });
  }
});

export default router;
