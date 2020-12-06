import { ShortenTextPipe } from './shorten-text.pipe';

describe('TextShortenPipe', () => {
  it('create an instance', () => {
    const pipe = new ShortenTextPipe();
    expect(pipe).toBeTruthy();
  });
});
