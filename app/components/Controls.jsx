const React = require('react');

const Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
  },
  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    };
  },
  render() {
    const { countdownStatus } = this.props;
    const renderStartStopButton = () => {
      let button;
      if (countdownStatus === 'started') {
        return (
          <button
            className="pause button secondary"
            onClick={this.onStatusChange('paused')}
          >Pause</button>
        );
      }
      return (
        <button
          className="start button primary"
          onClick={this.onStatusChange('started')}
        >Start</button>
      );
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button
          className="clear button alert hollow"
          onClick={this.onStatusChange('stopped')}
        >Clear</button>
      </div>
    );
  },
});

module.exports = Controls;
