import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  // @Input()
  // title!: string;

  title = input.required<string>();
  sendAlertEvent = output<string>();

  onSendAlert() {
    this.sendAlertEvent.emit('Alert from Child');
  }
}
