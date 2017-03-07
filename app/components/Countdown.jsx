const React = require('react');
const Clock = require('Clock');
const CountdownForm = require('CountdownForm');

const Countdown = React.createClass({
  getInitialState() {
    return {
      count: 0,
      countDownStatus: 'stopped',
    };
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.countDownStatus !== prevState.countDownStatus) {
      switch (this.state.countDownStatus) {
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
      countDownStatus: 'started',
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
      </div>
    );
  },
});

module.exports = Countdown;
