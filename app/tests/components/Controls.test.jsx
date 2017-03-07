const React = require('react');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause when started', () => {
      const controls = TestUtils.renderIntoDocument(
        <Controls countdownStatus="started" />,
      );
      const pauseButton = TestUtils.scryRenderedDOMComponentsWithClass(controls, 'pause');
      expect(pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
      const controls = TestUtils.renderIntoDocument(
        <Controls countdownStatus="paused" />,
      );
      const startButton = TestUtils.scryRenderedDOMComponentsWithClass(controls, 'start');
      expect(startButton.length).toBe(1);
    });
  });
});
