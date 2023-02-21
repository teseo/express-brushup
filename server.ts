import express, { Request, Response } from 'express';

const app = express();

app.set('view engine', 'ejs');
app.get('/', (req:Request, res:Response)=>{
    res.render("index", {text: "world"});
})

app.listen(3000);