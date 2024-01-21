import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "mysql",
  dialectOptions: {
    ssl: {
      required: false,
    },
  },
  dialectModule: require("mysql2"),
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  host: process.env.HOST,
  password: process.env.PASSWORD,
});
