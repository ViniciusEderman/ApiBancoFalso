const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db/db');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log('Server runing');
});

app.get('/games', (req, res) => {
    res.statusCode = 200;
    res.json(db.games);
});

app.get('/game/:id', (req, res) => {

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

app.post('/game', (req, res) => {
    const { id, title, year } = req.body;

    db.games.push({ //push adiciona dados no array
        id,
        title,
        year
    });

    res.sendStatus(200);
});

app.delete('/game/:id', (req, res) => {
     if(isNaN(req.params.id)) {
        res.send('Wrong Id')
        res.sendStatus(400);
    }else {
        const id = parseInt(req.params.id);
        const game = db.games.findIndex(g => g.id == id);

        if(game == -1) { // elemento do index que nao existe
            res,sendStatus(404);
        }else {
            db.games.splice(game, 1);
            res.sendStatus(200);
        }
    }
});

