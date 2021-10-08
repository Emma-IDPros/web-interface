import express, { Application, Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

const app: Application = express();
app.use(cors());
app.use(express.json());
const PORT: number | string = process.env.PORT || 5000;

app.get("/coord/:x/:y", async (req: Request, res: Response) => {
  const x: number = parseFloat(req.params.x);
  const y: number = parseFloat(req.params.y);
  const time = Date.now();
  const coord = await prisma.coord.create({
    data: { X: x, Y: y, createdAt: time },
  });
  res.send("success");
});

app.get("/coords", async (req: Request, res: Response) => {
  res.send(await prisma.coord.findMany({ take: 100 }));
});

app.get("/delete", async (req: Request, res: Response) => {
  res.send(await prisma.coord.deleteMany({}));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
