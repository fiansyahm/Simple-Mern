import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONN_URL = 'mongodb+srv://fiansyahm:fiansyahm@cluster0.3d454.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONN_URL, { useNewConnection: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('server running %s', PORT)))
    .catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);
//https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu 16.00