// ## banco.js

const banco = require('./banco.js');

cadastro = {
    nome: 'teste',
    cpf: 191
};

banco.create_user(cadastro)
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
