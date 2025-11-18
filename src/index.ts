import express, { type Request, type Response }  from 'express';

const app = express()

const PORT = 5555

app.use(express.json())

app.get("/", (req: Request, res: Response) => {

    res.json({ response: "here the response" });
})

app.get("/user/:name", async (req: Request, res: Response) => {
    const { name } = req.params

    const raw = await fetch(`https://api.github.com/users/${name}`)
    const data = await raw.json()
    console.log(data)
    res.json(data)
})

app.get("/repos", async (req: Request, res: Response)  => {
    const raw = await fetch('https://api.github.com/users/Cairon29/repos')
    const data = await raw.json()
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`runn in port ${PORT} \n http://localhost:5555`);
})