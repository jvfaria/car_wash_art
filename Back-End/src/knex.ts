import knex from 'knex';

class Knex {
    knexConnection: knex<any, unknown[]>;

    constructor() {
        this.knexConnection = knex({
            client: 'mysql',
            connection: {
                host: '127.0.0.1',
                user: 'sa',
                password: '12345',
                database: 'carwash'
            }
        });
    }

}

export default new Knex().knexConnection;