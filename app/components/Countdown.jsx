const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');
const Controls = require('Controls');

const Countdown = React.createClass({
  getInitialState() {
    return {
      count: 0,
      countdownStatus: 'stopped',
    };
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started' :
          this.startTimer();
          break;
      }
    }
  },
  startTimer() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0,
      });
    }, 1000);
  },
  handleSetCountdown(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started',
    });
  },
  render() {
    const { count } = this.state;
    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm
          onSetCountdown={this.handleSetCountdown}
        />
        <Controls countdownStatus="started" />
      </div>
    );
  },
});

module.exports = Countdown;
