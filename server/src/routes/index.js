import express from "express";
import product from "./prodRoutes.js";


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send('Ola tio Gleison')
    })
    app.use(
        express.json(),
        product
    )
}
export default routes;