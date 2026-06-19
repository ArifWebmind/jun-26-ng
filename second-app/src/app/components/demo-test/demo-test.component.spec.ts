import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTestComponent } from './demo-test.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DemoService } from '../../services/demo.service';

describe('DemoTestComponent', () => {
  let component: DemoTestComponent;
  let fixture: ComponentFixture<DemoTestComponent>;
  let de: DebugElement;
  let service: DemoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoTestComponent],
      providers: [DemoService],
    }).compileComponents();

    fixture = TestBed.createComponent(DemoTestComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(DemoService);
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render heading element with text 'hello test' on the template", () => {
    const headingEl = de.query(By.css('#heading'));
    expect(headingEl.nativeElement.textContent).toEqual('Hello World');
  });

  it("should have 'title' property with text 'Hello World'", () => {
    const title = component.title;
    expect(title).toEqual('Hello World');
  });

  it("should render paragraph with text 'The main content'", () => {
    const paragraphEl = de.query(By.css('.content'));
    expect(paragraphEl.nativeElement).not.toBeUndefined();
  });

  it("should render paragraph with text 'The side bar' when button is clicked", () => {
    const buttonEl = de.query(By.css('button'));
    buttonEl.triggerEventHandler('click');
    fixture.detectChanges();
    const paragraphEl = de.query(By.css('.sidebar'));
    expect(paragraphEl.nativeElement.textContent).toBe('The side bar');
  });

  it("should not render 'The main content' when the button is clicked", () => {
    const buttonEl = de.query(By.css('button'));
    buttonEl.triggerEventHandler('click');
    fixture.detectChanges();
    const paragraphEl = de.query(By.css('.context'));
    expect(paragraphEl).toBeNull();
  });

  it("should populate 'dummytext' property in the component class", () => {
    expect(component.dummyText).toEqual('some dummy text');
  });

  it("should populate 'promiseData' variable with 'Promise Data'", async () => {
    const response = await service.getPromiseData();
    fixture.detectChanges();
    expect(response).toEqual('Promise data');
    expect(component.promiseData).toEqual(response);
  });

  it("should populate 'observableData' variable with 'observable data'", () => {
    expect(component.observableData).toEqual('observable data');
  });
});
