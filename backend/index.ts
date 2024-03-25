import "reflect-metadata";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { routes } from "./src/routes";
import {createConnection, getConnection} from "typeorm";
import {container} from "tsyringe";
import {Database} from "./src/repository/Database";

dotenv.config();

const app: express.Application = express();
const port = 3000;

app.use(
    cors({
        origin: ["http://localhost:4000"],
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: ["*"],
    })
);

app.use(async (req, res, next) => {
    let connection;
    try {
        connection = getConnection();
    } catch (error) {
        connection = await createConnection();
    }

    container.register(Database, {
        useValue: new Database(connection),
    });

    next();
});

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

routes(app);

const main = () => {
    app.listen(port, () => {
        console.log("Server listening on port", port);
    });
};

main();
