import express from 'express';
import Service from '../models/Service';
import Knex from '../knex';

class SevicesController {
    //Define o caminho do controller
    public path: string = '/services/';
    //Inicializa o router
    public router: express.Router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes(): void {
        //Define rotas do controller
        this.router.get(this.path + "/get", this.getLast);
    }

    private getLast(request: express.Request, response: express.Response): void {
        //Retorna os primeiros 20 clientes
        Knex<Service>('service').limit(20).then((services: Service[]): void => {
            response
                .status(200)
                .send(services);
        }).catch((err: any): void => {
            console.log("[" + new Date().toLocaleString() + "] ERRO GET SERVICES: " + JSON.stringify(err));

            response
                .status(500)
                .send({
                    error: true,
                    message: "Houve um erro nos nossos servidores. Favor tentar novamente."
                });
        });
    }
}

export default SevicesController;