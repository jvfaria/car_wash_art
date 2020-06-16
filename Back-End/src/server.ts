//Importa a classe principal
import App from './app';
import { ClientsController, ServicesController, VehiclesController } from './controllers';

//Define a porta http do servidor
const port: string = process.env.PORT || "3000";

//Inicia o app e define os controllers 
new App(
    [
        new ClientsController(),
        new ServicesController(),
        new VehiclesController()
    ],
    port,
).start();