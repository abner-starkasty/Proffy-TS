import knex from 'knex';
import path from 'path'; //Módulo nativo do node que trabalha com rotas internas da app

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
});

export default db;