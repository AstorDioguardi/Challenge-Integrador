import { INTEGER, STRING } from "sequelize";
import MySQL from "../../config/mysql.js";
//import { Postgres } from "../../config/connections/postgres.js";


export class ProductsSchema {

    constructor() {

        this.schema = {
            id: { type: INTEGER, allowNull: false, primaryKey: true },
            img1: { type: STRING },
            img2: { type: STRING },
            alt1: { type: STRING },
            alt2: { type: STRING },
            licence: { type: STRING },
            productName: { type: STRING },
            price: { type: INTEGER },
            promo: { type: STRING },
            stock: { type: INTEGER}
        };

        this.connection = this.createConnection();

        this.config = {
            sequelize: this.connection.sequelize,
            modelName: 'productos',
            timestamps: false
        };

    }

    createConnection = () => {

        //if (process.argv[2] === 'mysql')
            return new MySQL();

        /*if (process.argv[2] === 'postgres')
            return new Postgres();*/
    }
}
