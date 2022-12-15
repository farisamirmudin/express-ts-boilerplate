import { Request, Response } from "express";

export const greet = (req: Request, res: Response) => {
  res.json({ msg: "Greeting Humans!" });
};

export const about = (req: Request, res: Response) => {
  res.json({ msg: "About Page" });
};
