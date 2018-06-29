import { contactSchema } from './../models/crmModel';
import * as mongoose from 'mongoose';
import { Request, Response } from 'express';

const contactModel = mongoose.model('Contact', contactSchema);

export class ContactController {
  public addNewContact(req: Request, res: Response) {
    const newContact = new contactModel(req.body);
    newContact.save((err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public getContact(req: Request, res: Response) {
    contactModel.find({}, (err, contacts) => {
      if (err) {
        res.send(err);
      }
      res.json(contacts);
    });
  }

  public getContactById(req: Request, res: Response) {
    contactModel.findOne({ _id: req.params.contactId }, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json(contact);
    });
  }

  public updateContact(req: Request, res: Response) {
    contactModel.findOneAndUpdate(
      { _id: req.params.contactId },
      req.body,
      { new: true },
      (err, contact) => {
        if (err) {
          res.send(err);
        }
        res.send(contact);
      },
    );
  }

  public deleteContact(req: Request, res: Response) {
    const { contactId } = req.params;
    contactModel.deleteOne({ _id: contactId }, err => {
      if (err) {
        res.send(err);
      }
      res.send({ message: 'deleted : ' + req.params.contactId });
    });
  }
}
