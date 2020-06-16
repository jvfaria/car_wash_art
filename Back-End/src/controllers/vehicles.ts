import express from 'express';
import Vehicle from '../models/Vehicle';
import Knex from '../knex';

class VehiclesController {
    //Define o caminho do controller
    public path: string = '/vehicles/';
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
        Knex<Vehicle>('vehicle').limit(20).then((vehicles: Vehicle[]): void => {
            response
                .status(200)
                .send(vehicles);
        }).catch((err: any): void => {
            console.log("[" + new Date().toLocaleString() + "] ERRO GET VEHICLES: " + JSON.stringify(err));

            response
                .status(500)
                .send({
                    error: true,
                    message: "Houve um erro nos nossos servidores. Favor tentar novamente."
                });
        });
    }
}

export default VehiclesController;