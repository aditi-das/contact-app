import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {ContactModel} from '../model/contact.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  contactList: ContactModel[];
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    // fetch the contact list and set it in a service for other components to use later.
    this.contactService.getContactList().subscribe((data) => {
      // console.log(data.People);
      this.contactList = data.People;
      this.contactService.setContactListObservable(data.People);
    });
  }

}
