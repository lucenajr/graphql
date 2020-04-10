# graphql
API utilizando graphql ao invés de REST

- O arquivo com as consigurações do banco não é feito commit por questões de segurança, portanto deve ser criado um arquivo .env na raiz do projeto seguindo o seguinte esquema:

const connection = {
    database: 'graphql',
    user:     'root',
    password: ''
}
module.exports = connection

- Esse arquivo é importado no arquivo knexfile.js e configurado o banco.