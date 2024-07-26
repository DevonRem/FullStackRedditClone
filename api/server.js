import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/User.js';

const secret = 'secret';
const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));


const db = mongoose.connection;
db.on('error', console.log);

app.get('/', (req, res) => {
    res.send('success');
});

app.post('/register', (req, res) => {
    const {email, username} = req.body;
    const password = bcrypt.hashSync(req.body.password, 10);
    const user = new User({email, username, password});
    user.save().then( user => {
        jwt.sign({id:user._id}, secret, (err, token) => {
            if(err) {
                console.log(err);
                res.sendStatus(500);
            } else {
                res.sendStatus(201).cookie('token', token).send();
            }
        });
    }).catch(e => {
        console.log(e);
        res.sendStatus(500);
    });
});

app.listen(4000);