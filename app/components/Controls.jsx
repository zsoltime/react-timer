const React = require('react');

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
  },
  render() {
    const { countdownStatus } = this.props;
    const renderStartStopButton = () => {
      let button;
      if (countdownStatus === 'started') {
        button = <button className="pause button secondary">Pause</button>;
      } else if (countdownStatus === 'paused') {
        button = <button className="start button primary">Start</button>;
      }
      return button;
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="clear button alert hollow">Clear</button>
      </div>
    );
  },
});

module.exports = Controls;
