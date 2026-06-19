import { TestBed } from '@angular/core/testing';

import { DemoService } from './demo.service';

describe('DemoService', () => {
  let service: DemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should return 'some dummy text' when getTestData() function is called", () => {
    const result = service.getTestData();
    expect(result).toEqual('some dummy text');
  });

  it("should return 'Promise data' when 'getPromiseData()' function is called", async () => {
    const response = await service.getPromiseData();
    expect(response).toEqual('Promise data');
  });
});
