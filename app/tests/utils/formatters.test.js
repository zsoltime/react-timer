const expect = require('expect');
const { zeroFill } = require('formatters');

describe('Utils', () => {
  describe('zeroFill', () => {
    it('should return a string', () => {
      expect(zeroFill(5)).toBeA('string');
    });

    it('should add a leading zero if number is one digit only', () => {
      expect(zeroFill(5)).toBe('05');
    });

    it('should not add a leading zero if it is a two digits number', () => {
      expect(zeroFill(12)).toBe('12');
    });

    it('should work with numbers bigger than 100', () => {
      expect(zeroFill(154)).toBe('154');
    });
    // can't describe it better at the moment :)
    it('should accept a second argument and use it as its size', () => {
      expect(zeroFill(12, 4)).toBe('0012');
    });
  });
});
