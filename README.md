# Budpar
Trabalho para faculdade, lançamento de orçamentos para formatura utilizando a MEAN.

MEAN:
- M(MongoDB)
- E(Express)
- A(Angular)
- N(Node)

Requisítos:
- MongoDB
- NodeJS
- NPM

Na data realizada do trabalho havia apenas a primeira verso do Angular.

Para subir o projeto siga os passos abaixo:

Primeiro clone o repositório:
```
git clone https://github.com/mahenrique94/budpar.git budpar
```

Agora entre dentro da pasta raiz do projeto:
```
cd budpar
```

Realize o download de todas as dependências do projeto:
```
npm install
```

Suba o servidor do MongoDB:
```
mongod
```

Agora suba o projeto:
```
node server.js
```

Com isso irá ser criado o banco de dados **budpar** e o sistema estará rodando no seguinte endereço `http://localhost:3000`

Para conseguir acessar a aplicação acesse o banco criado anteriormente quando subimos a app e insira um usuário:
```
mongo

use budpar

db.usuario.insert({
   nome : "ROOT",
   usuario : "ROOT",
   senha : "ROOT",
   datacreate : new Date(),
   dataupdate : new Date() 
});
```

Com isso ja podemos acessar o endereço local na porta 3000 e logar na app com o usuário criado anteriormente.
