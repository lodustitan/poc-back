//? Layered Architecture
import { routes } from "./routes";

//? Importants Libs
import express, { Express, json } from "express";
import cors from "cors";

const PORT: number = 4000;
const express_app: Express = express();

express_app.use(cors());
express_app.use(json());

express_app.use('/movies', routes.movies);
express_app.use('/wishlist', routes.wishlist);

express_app.listen(PORT, () => console.log(`Server 'Express' listening on port: ${PORT}`));