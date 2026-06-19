import { Math, squre, sum } from './maths';

describe('The Math Util', () => {
  let math: Math;
  let result: number;

  beforeEach(() => {
    math = new Math();
    result = 0;
  });
  // beforeAll(() => {});
  afterEach(() => {
    result = 0;
  });
  // afterAll(() => {});

  it('should return multiple of given two numbers', () => {
    result = math.multiple(5, 4);
    expect(result).toBe(20);
  });

  it('should return the sum of two numbers', () => {
    result = sum(3, 4);
    expect(result).toBe(7);
  });

  it('should return the square of given number', () => {
    result = squre(4);
    expect(result).toBe(16);
  });
});
