import express from 'express';
import * as bodyParser from 'body-parser';
import morgan from "morgan";

class App {
    public app: express.Application;
    public port: string;

    constructor(controllers: any[], port: string) {
        //Instancia o express e executa funções de definição
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    private initializeMiddlewares(): void {
        //Inicia o logger http usando o morgan no modo dev
        this.app.use(morgan("dev"));
        //Define apenas uso simples
        this.app.use(bodyParser.urlencoded({ extended: false }));
        //Permite apenas solicitações application/json
        this.app.use(bodyParser.json());

        this.app.use((request: express.Request, response: express.Response, next: Function): any => {
            //Permite solicitações externas
            response.header('Access-Control-Allow-Origin', '*');
            //Define os headers permitidos
            response.header(
                'Access-Control-Allow-Header',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            );

            //Retorna metodos aceitos caso a solicitação seja OPTIONS
            if (request.method === 'OPTIONS') {
                response.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
                response.status(200).send();
            }

            next();
        });
    }

    private initializeControllers(controllers: any[]): void {
        //Adiciona os controllers adicionados no server.ts
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });

        //Se a requisição não corresponder à nenhum controller gera erro
        this.app.use((request: express.Request, response: express.Response, next: Function): void => {
            const error = new Error("Página não encontrada.");
            next(error);
        });

        //Caso haja algum erro retorna sua mensagem junto ao HTTP 500
        this.app.use((err: Error, request: express.Request, response: express.Response) => {
            response.status(500).send({
                error: true,
                message: err.message || "Houve um problema com nossos servidores. Favor entrar em contato com o suporte."
            });
        });
    }

    public start(): void {
        //Começa o serviço
        this.app.listen(this.port, (): void => {
            console.log(`Server listening on the port ${this.port}`);
        });
    }
}

export default App;