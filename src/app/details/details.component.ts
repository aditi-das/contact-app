import { Component, OnInit } from '@angular/core';
import {ContactService} from '../services/contact.service';
import {ActivatedRoute} from '@angular/router';
import {ContactModel} from '../model/contact.model';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  contactData: ContactModel;
  contactList: ContactModel[];
  message: string;
  constructor(private contactService: ContactService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // Set the selected contact data to be displayed in details
    // When navigating from root
    this.route.params.subscribe((params) => {
      const contactName = params.name;
      if (contactName && this.contactService.contactList) {
        const contactData = this.contactService.contactList.find((contact) => contact.name === contactName);
        this.isLoggedInUser(contactData);
      }
    });
    // When loading directly via URL with contact name as parameter
    const params$ = this.route.params;
    const contactList$ = this.contactService.getContactListObservable();
    const result$ = combineLatest(params$, contactList$);
    result$.subscribe(result => {
      // console.log(result);
      const contactName = result[0].name;
      this.contactList = result[1] || this.contactList;
      const contactData = this.contactList.find((contact) => contact.name === contactName);
      this.isLoggedInUser(contactData);
    });
  }
  // method to get the data from text area
  sendMessage() {
    console.log(this.message);
  }
  // Not a good way to find the logged in user's data.
  // Error cases of incorrect contact name will also show logged in user (below data)
  isLoggedInUser(data) {
    const loggedInUserData: ContactModel = {
      name: 'Vlocity',
      rating: 3,
      img: 'http://www.fillmurray.com/200/200',
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s ' +
        'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type ' +
        'specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, ' +
        'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem ' +
        'Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      Likes: [
        'Dogs',
        'Long walks on the beach',
        'Chopin',
        'Tacos'
      ],
      Dislikes: [
        'Birds',
        'Red things',
        'Danish food',
        'Dead Batteries'
      ]
    };
    this.contactData = data || loggedInUserData;
  }
}
