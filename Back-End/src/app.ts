import express from 'express';
import * as bodyParser from 'body-parser';
import morgan from "morgan";

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers, port) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares() {
        this.app.use(morgan("dev"));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Origin',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            );

            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
                return res.status(200).send();
            }

            next();
        });
    }

    private initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });

        this.app.use((req, res, next) => {
            const error = new Error("Página não encontrada.");
            next(error);
        });

        this.app.use((err, req, res, next) => {
            return res.status(500).send({
                error: true,
                message: err.message || "Houve um problema com nossos servidores. Favor entrar em contato com o suporte."
            });
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on the port ${this.port}`);
        });
    }
}

export default App;