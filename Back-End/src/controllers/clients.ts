import express from 'express';
import Client from '../models/Client';
import Knex from '../knex';

class ClientsController {
    //Define o caminho do controller
    public path: string = '/clients/';
    //Inicializa o router
    public router: express.Router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes(): void {
        //Define rotas do controller
        this.router.get(this.path + "/get", this.getLast);
        this.router.post(this.path + "/create", this.createClient);
    }

    private createClient(request: express.Request, response: express.Response): void {
        let newClient: Client = request.body.client;

        Knex('client').insert(newClient).then((): void => {
            response
                .status(201)
                .send({
                    error: false,
                    message: "Cliente cadastrado com sucesso."
                });
        }).catch((err: any): void => {
            console.log("[" + new Date().toLocaleString() + "] ERRO CREATE CLIENT: " + JSON.stringify(err));

            response
                .status(500)
                .send({
                    error: true,
                    message: "Houve um erro nos nossos servidores. Favor tentar novamente."
                });
        });
    }

    private getLast(request: express.Request, response: express.Response): void {
        //Retorna os primeiros 20 clientes
        Knex<Client>('client').limit(20).then((clients: Client[]): void => {
            response
                .status(200)
                .send(clients);
        }).catch((err: any): void => {
            console.log("[" + new Date().toLocaleString() + "] ERRO GET CLIENTS: " + JSON.stringify(err));

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