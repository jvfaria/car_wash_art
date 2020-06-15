import knex from 'knex';

class Knex {
    //Instancia o knex
    public knexConnection: knex<any, unknown[]>;

    constructor() {
        //Inicializa a conexáo
        this.knexConnection = knex({
            client: 'mysql',
            connection: {
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: 'carwash'
            }
        });
    }

}

export default new Knex().knexConnection;