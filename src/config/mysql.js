import { Sequelize } from "sequelize";

export default class MySQL {

    constructor() {
        this.sequelize = new Sequelize({
            dialect: 'mysql',
            host: 'localhost',
            database: 'node_23576',
            username: 'root',
            password: '',
            port: 3306,
            pool: { max: 10, min: 0 }
        })

        this.sequelize.authenticate()
            .then(() => console.log('Base de Datos conectado con exito :D'))
            .catch((e) => console.log('problema en la conexión:', e))
    }
}
