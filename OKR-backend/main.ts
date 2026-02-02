import express from 'express'
import cors from 'cors'
import {HealthController} from "./healthController";
import {HealthService} from "./healthService";
import {createHealthRouteHandler} from "./createHealthRouteHandler";
import {OkrController} from "./okrController";
import {OkrService} from "./okrService";
import {createOkrRouteHandler} from "./createOkrRouteHandler";

const app = express()
const port = 3000


app.use(cors())
app.use(express.json());

const healthService = new HealthService();
const healthController = new HealthController(healthService);

app.use("/health",
    createHealthRouteHandler(healthController)
)


const okrService = new OkrService();
const okrController = new OkrController(okrService);

app.use("/okrs",
    createOkrRouteHandler(okrController)
);

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})