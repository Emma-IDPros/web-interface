import express, { Application, Request, Response } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient({ log: ["query"] });
const prisma = new PrismaClient();

const app: Application = express();
app.use(cors());
app.use(express.json());
const PORT: number | string = process.env.PORT || 6969;

app.get("/coord/:x/:y", async (req: Request, res: Response) => {
  const x: number = parseFloat(req.params.x);
  const y: number = parseFloat(req.params.y);
  const time = Date.now();
  const coord = await prisma.coord.create({
    data: { X: x, Y: y, createdAt: time },
  });
  res.send("success");
});

app.get("/message/:message", async (req: Request, res: Response) => {
  const message: string = req.params.message;
  const createdAt = Date.now();
  const time: string = new Date().toLocaleTimeString();
  console.log(`${message}                 [${time}]`);

  await prisma.message.create({ data: { message, createdAt } });

  res.send("success");
});

app.get("/coords", async (req: Request, res: Response) => {
  res.send(await prisma.coord.findMany());
});

app.get("/messages", async (req: Request, res: Response) => {
  res.send(await prisma.message.findMany());
});

app.get("/delete/coords", async (req: Request, res: Response) => {
  res.send(await prisma.coord.deleteMany({}));
});

app.get("/delete/messages", async (req: Request, res: Response) => {
  res.send(await prisma.message.deleteMany({}));
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
