const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');

const Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      const clock = TestUtils.renderIntoDocument(
        <Clock totalSeconds={63} />,
      );
      const el = TestUtils.findRenderedDOMComponentWithClass(clock, 'clock');
      const actualText = el.querySelector('.clock__text').innerText;

      expect(actualText).toBe('01:03');
    });
  });

  describe('formatSeconds', () => {
    it('should form4at seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 643;
      const expected = '10:43';
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });

    it('should format seconds when min/sec is less than 10', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 61;
      const expected = '01:01';
      const actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
