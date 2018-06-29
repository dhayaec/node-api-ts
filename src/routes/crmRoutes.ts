import { ContactController } from './../controllers/crmControllers';
import { Request, Response, Application } from 'express';

export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app: Application): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'welcome',
      });
    });

    app
      .route('/contact')
      .get(this.contactController.getContact)
      .post(this.contactController.addNewContact);

    app
      .route('/contact/:contactId')
      .get(this.contactController.getContactById)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);
  }
}
