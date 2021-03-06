import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as swaggerUi from 'swagger-ui-express';
import {requestLoggerMiddleware} from './middleware/requestLogger';
import './controllers/users';
import {RegisterRoutes} from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(requestLoggerMiddleware);
RegisterRoutes(app);

try {
    const swaggerDocument = require('./../swagger.json');
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (e) {
    console.log('unable to read swagger.json', e);
}

export {app};
