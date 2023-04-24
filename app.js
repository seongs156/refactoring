import express from "express";
import path from 'path';
const __dirname = path.resolve();

const app = express()
const port = 5000

// app.get('/', (req, res) => {
//     app.use(express.static(path.join(__dirname)));
//     res.sendFile(__dirname+'/index.html');
// })

const currentChapter = '/chapter6';
app.get('/', (req, res) => {
    app.use(express.static(path.join(__dirname)));
    res.sendFile(__dirname+currentChapter+'/index.html');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})