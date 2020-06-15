//Importa a classe principal
import App from './app';
import ClientsController from './controllers/clients';

//Define a porta http do servidor
const port: string = process.env.PORT || "3000";

//Inicia o app e define os controllers 
new App(
    [
        new ClientsController(),
    ],
    port,
).start();