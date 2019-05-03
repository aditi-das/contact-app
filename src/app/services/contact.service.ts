import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {ContactModel, People} from '../model/contact.model';

const URI = 'assets/people.json';
@Injectable()
export class ContactService {
  private _contactList: ContactModel[];
  private _contactListObservable = new Subject<ContactModel[]>();
  constructor(private http: HttpClient) {}
  // Fetch the people list from the JSON file
  getContactList(): Observable<People> {
      return this.http.get<People>(URI);
  }
  // helper methods to store and get the contact list array from this service
  getContactListObservable(): Observable<ContactModel[]> {
    return this._contactListObservable.asObservable();
  }

  setContactListObservable(data: ContactModel[]) {
    // console.log('data is set');
    this.contactList = data;
    this._contactListObservable.next(data);
  }
  get contactList(): ContactModel[] {
    return this._contactList;
  }

  set contactList(value: ContactModel[]) {
    this._contactList = value;
  }

}
