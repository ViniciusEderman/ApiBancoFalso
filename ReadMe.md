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
  Json utilizado: <br>
  games: [ // jogos "cadastrados no banco" <br>
        { <br>
          id: 01, <br>
          title: 'Fortnite', <br>
          year: 2011 <br>
        }, <br>
        { <br>
            id: 02, <br>
            title: 'Minecraft', <br>
            year: 2011 <br>
        }, <br>
        { <br>
            id: 03, <br>
            title: 'Animal Crossing: New Horizons', <br>
            year: 2020 <br>
        }, <br>
        { <br>
            id: 04, <br>
            title: 'Assassins Creed Valhalla', <br>
            year: 2020 <br>
        }, <br>
        { <br>
            id: 05, <br>
            title: 'Cyberpunk 2077', <br>
            year: 2020 <br>
        }, <br>
    ], <br>
    users: [ usuários "cadastrados no banco" <br>
        { <br>
            id: 1, <br>
            name: "Victor Luis", <br>
            email: "victor.luis@gmail.com", <br>
            password: "victorluis2030" <br>
        }, <br>
        { <br>
            id: 2, <br>
            name: "Luis Carlos", <br>
            email: "carlinhos@gmail.com", <br>
            password: "20301015" <br>
        }, <br>
    ] <br>