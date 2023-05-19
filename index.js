const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/db');
const cors = require('cors');
const webToken = require('jsonwebtoken');

const jwtPassword = 'P4ssw0rd@r5t5';
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function auth(req, res, next) { //middleware
    const authToken = req.headers['authorization'];

    if(authToken != undefined) {
        const bearer = authToken.split(' ');
        const token = bearer[1];

        webToken.verify(token, jwtPassword, (err, response) => {
            if(err) {
                res.status(401);
                res.json({err: 'Token Invalido'});
            } else {
                req.token = token;
                req.user = {id: response.id, email: response.email};
                next(); //passa a conexao do middleware para a rota 
                console.log(response);
            }
        })
    }else {
        res.status(401);
        res.json({err: 'Token Invalido'});
    }
    //console.log(authToken);
}

app.listen(8080, () => {
    console.log('Server runing');
});

app.get('/games',auth,(req, res) => {
    res.statusCode = 200;
    const { games } = db;
    res.json(games);
});

app.get('/game/:id',auth,(req, res) => {

    if(isNaN(req.params.id)) {
        res.send('Wrong Id')
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const game = db.games.find(game => game.id == id)

        if(game == undefined) {
            res.sendStatus(404);
        } else {
            res.statusCode = 200;
            res.json(game);
        }
    }
    
});

app.post('/game',auth,(req, res) => {
    const { id, title, year } = req.body;

    db.games.push({ //push adiciona dados no array
        id,
        title,
        year
    });

    res.sendStatus(200);
});

app.delete('/game/:id',auth,(req, res) => {
     if(isNaN(req.params.id)) {
        res.send('Wrong Id')
        res.sendStatus(400);
    }else {
        const id = parseInt(req.params.id);
        const game = db.games.findIndex(g => g.id == id);

        if(game == -1) { //elemento do index que nao existe
            res,sendStatus(404);
        }else {
            db.games.splice(game, 1);
            res.sendStatus(200);
        }
    }
});

app.put('/game/:id',auth,(req, res) => {
    if(isNaN(req.params.id)) {
        res.send('Wrong Id')
        res.sendStatus(400);
    } else {
        const id = parseInt(req.params.id);
        const game = db.games.find(game => game.id == id)

        if(game == undefined) {
            res.sendStatus(404);
        } else {
            const { title, year } = req.body;
            if(title != undefined && year != undefined) {
                game.title = title;
                game.year = year;
            }
            res.sendStatus(200);
        }
    }
});

app.post('/auth',(req, res) => {
    const {email, password} = req.body;

    if(email != undefined) {
        const user = db.users.find(user => user.email == email);

        if(user != undefined) {
            if(user.password == password) {
                webToken.sign({id: user.id, email: user.email},jwtPassword,{expiresIn:'48h'}, (err, token) => { //payload
                    if(err) {
                        res.status(400);
                        res.json("falha na autenticação");
                    } else{
                        res.status(200);
                        res.json({token: token});
                    }
                }); 
            } else {
                res.status(401);
                res.json({token: "Wrong Password"});
            }
        } else{
            res.status(404);
            res.json({err: "usuario não encontrado"});
        }
    } else{
        res.status(400);
        res.json({err: "Email invalido ou não constado no sistema"});
    }
});
