import { Routes } from './routes/crmRoutes';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

class App {
  public app: express.Application;
  public routesList: Routes = new Routes();
  public mongoUrl: string = 'mongodb://localhost/crm';

  constructor() {
    this.app = express();
    this.config();
    this.routesList.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): any {
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }
}

export default new App().app;
