import { Sequelize } from "sequelize";

const db = new Sequelize('node-app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db