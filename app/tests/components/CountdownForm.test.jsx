const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');

const CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown() if valid seconds entered', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(
      <CountdownForm onSetCountdown={spy} />,
    );
    const el = TestUtils.findRenderedDOMComponentWithClass(
      countdownForm,
      'countdown__form',
    );

    countdownForm.secondsRef.value = '102';
    TestUtils.Simulate.submit(el);

    expect(spy).toHaveBeenCalledWith(102);
  });

  it('should not call onSetCountdown() if invalid seconds entered', () => {
    const spy = expect.createSpy();
    const countdownForm = TestUtils.renderIntoDocument(
      <CountdownForm onSetCountdown={spy} />,
    );
    const el = TestUtils.findRenderedDOMComponentWithClass(
      countdownForm,
      'countdown__form',
    );

    countdownForm.secondsRef.value = 'not a number';
    TestUtils.Simulate.submit(el);

    expect(spy).toNotHaveBeenCalled();
  });
});
