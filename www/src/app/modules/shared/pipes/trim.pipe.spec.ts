import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  let pipe: TrimPipe;

  beforeEach(() => {
    pipe = new TrimPipe();
  })

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should trim a string to the specified length', () => {
    const inputString = 'Hello, this is a long string.';
    const length = 10;
    const result = pipe.transform(inputString, length);
    expect(result).toBe('Hello, ...');
  });

  it('should not trim a string if it is shorter than the specified length', () => {
    const inputString = 'Short';
    const length = 10;
    const result = pipe.transform(inputString, length);
    expect(result).toBe('Short');
  });
});
