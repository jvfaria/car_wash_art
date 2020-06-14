import App from './app';
import ClientsController from './controllers/clients';

const port = process.env.PORT || 3000;

const app = new App(
    [
        new ClientsController(),
    ],
    port,
);

app.listen();