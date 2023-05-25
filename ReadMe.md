# API DE GAMES
  A api tem como base o estudo dos conceitos do que é uma api(rest), atualmente sem utilização de um banco de dados

# Observação:
  O conceito do banco falso é a utilização de um arquivo Json encontrado no repositório -> db -> db.js

# Arquivos:
  ConsumoApi -> index.html(html composto de axios para consumir a Api em um front-end)<br>
  db -> db.js arquivo responsável pelo dados, já que não há utilização de um banco<br>
  index.js -> todo o código da api, rotas e lógica por trás do funcionamento

# Tipos De Rotas Utilizadas:
  > get >
  > post >
  > put >
  > delete >

# Auth:
  app.post('/auth') rota que faz a vericação de email, user, password -> retornando (200) + o token de acesso <br> e para falha na autenticação é retornado o status (400) 
# Banco Falso:
  Json utilizado: 
  ```json
 {
    games: [
    { 
        id: 01, 
        title: 'Fortnite', 
        year: 2011 
    }, 
    { 
        id: 02, 
        title: 'Minecraft', 
        year: 2011 
    }, 
    { 
        id: 03, 
        title: 'Animal Crossing: New Horizons', 
        year: 2020 
    }, 
    { 
        id: 04, 
        title: 'Assassins Creed Valhalla', 
        year: 2020 
    }, 
    { 
        id: 05, 
        title: 'Cyberpunk 2077', 
        year: 2020 
    }, 
], 
users: [
    { 
        id: 1, 
        name: "Victor Luis", 
        email: "victor.luis@gmail.com", 
        password: "victorluis2030" 
    }, 
    { 
        id: 2, 
        name: "Luis Carlos", 
        email: "carlinhos@gmail.com", 
        password: "20301015" 
    }, 
] 
  }
```
 