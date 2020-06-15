import express from 'express';
import Client from '../models/Client';
import Knex from '../knex';

class ClientsController {
    //Define o caminho do controller
    public path: string = '/clients';
    //Inicializa o router
    public router: express.Router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes(): void {
        //Define rotas do controller
        this.router.get(this.path, this.getAll);
    }

    public getAll(request: express.Request, response: express.Response): void {
        //Retorna os primeiros 20 clientes
        Knex<Client>('client').limit(20).then((clients: Client[]) => {
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