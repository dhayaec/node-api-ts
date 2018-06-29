import { ContactSchema } from './../models/crmModel';
import * as mongoose from 'mongoose';
import { Request, Response } from 'express';

const Contact = mongoose.model('Contact', ContactSchema);

export class ContactController {
  public addNewContact(req: Request, res: Response) {
    let newContact = new Contact(req.body);
    newContact.save((err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getContact(req: Request, res: Response) {
    Contact.find({}, (err, contacts) => {
      if (err) {
        res.send(err);
      }
      res.json(contacts);
    });
  }

  public getContactById(req: Request, res: Response) {
    Contact.findOne({ _id: req.params.contactId }, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public updateContact(req: Request, res: Response) {
    Contact.findOneAndUpdate(
      { _id: req.params.contactId },
      req.body,
      { new: true },
      (err, contact) => {
        if (err) {
          res.send(err);
        }
        res.send(contact);
      }
    );
  }

  public deleteContact(req: Request, res: Response) {
    Contact.deleteOne({ _id: req.params.contactId }, err => {
      if (err) {
        res.send(err);
      }
      res.send({ message: 'deleted : ' + req.params.contactId });
    });
  }
}
