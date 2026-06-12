import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../model/user';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrl: './user-image.component.css',
})
export class UserImageComponent {
  @Input() user!: User;

  @Output()
  userEvent = new EventEmitter<User>();

  onGenerate() {
    this.userEvent.emit(this.user);
  }
}
