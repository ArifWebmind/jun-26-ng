import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-demo-test',
  standalone: true,
  imports: [],
  templateUrl: './demo-test.component.html',
  styleUrl: './demo-test.component.css',
})
export class DemoTestComponent implements OnInit {
  title = 'Hello World';
  toggle = true;
  dummyText!: string;
  promiseData!: string;
  observableData!: string;

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.dummyText = this.demoService.getTestData();
    this.demoService
      .getPromiseData()
      .then((response: string) => (this.promiseData = response));
    this.demoService
      .getObservableData()
      .subscribe((data) => (this.observableData = data));
  }
}
