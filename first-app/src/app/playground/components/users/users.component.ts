import { Component } from '@angular/core';
import { User } from '../../../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user: User = {
    firstName: 'bill',
    lastName: 'gates',
    dob: new Date('Dec 21, 1964'),
    income: 50000,
    isWorking: true,
    company: 'Microsoft Inc',
    avatar: 'assets/images/bill.jpeg',
    votes: 120,
  };

  onMoreInfo(person: User) {
    alert(`Mr ${person.lastName} is working with ${person.company}!`);
  }
}
