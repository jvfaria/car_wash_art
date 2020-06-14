import * as express from 'express';
import Client from '../models/Client';
import Knex from '../knex';

class ClientsController {
    public path = '/clients';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.getAll);
    }

    getAll = (request: express.Request, response: express.Response) => {
        Knex<Client>('clients').limit(20).then((clients: Client[]) => {
            response
                .status(200)
                .send(clients);
        }).catch((err: any) => {
            console.log("[" + new Date().toLocaleString() + "] ERRO GETALL CLIENTS: " + JSON.stringify(err));

            response
                .status(500)
                .send({
                    error: true,
                    message: "Houve um erro nos nossos servidores. Favor tentar novamente."
                });
        });
    }
}

export default ClientsController;