import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css',
})
export class CompAComponent {
  constructor(public counterService: CounterService) {}

  increase() {
    this.counterService.increment();
  }

  decrease() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }
}
