const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');

const Timer = React.createClass({
  getInitialState() {
    return {
      count: 0,
      timerStatus: 'stopped',
    };
  },
  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started' :
          this.startTimer();
          break;
        case 'stopped' :
          this.setState({
            count: 0,
          });
        case 'paused' :
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer() {
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  },
  handleStatusChange(newStatus) {
    this.setState({
      timerStatus: newStatus,
    });
  },
  render() {
    const { count, timerStatus } = this.state;
    return (
      <div className="timer">
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} />
        <Controls
          countdownStatus={timerStatus}
          onStatusChange={this.handleStatusChange}
        />
      </div>
    );
  },
});

module.exports = Timer;
