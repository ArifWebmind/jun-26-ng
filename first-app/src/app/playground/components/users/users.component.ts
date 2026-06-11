import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  user = {
    firstName: 'bill',
    lastName: 'gates',
    dob: new Date('Dec 21, 1964'),
    income: 50000,
    isWorking: true,
    company: 'Microsoft Inc',
    avatar: 'assets/images/bill.jpeg',
    votes: 120,
  };

  onMoreInfo(person: any) {
    alert(`Mr ${person.lastName} is working with ${person.company}!`);
  }
}
