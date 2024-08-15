import { MiddlewareDateMiddleware } from './middleware-date.middleware';

describe('MiddlewareDateMiddleware', () => {
  it('should be defined', () => {
    expect(new MiddlewareDateMiddleware()).toBeDefined();
  });
});
