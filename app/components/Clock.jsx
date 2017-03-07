const React = require('react');
const { zeroFill } = require('formatters');

const Clock = React.createClass({
  propTypes: {
    totalSeconds: React.PropTypes.number,
  },
  getDefaultProps() {
    return {
      totalSeconds: 0,
    };
  },
  formatSeconds(totalSeconds) {
    const seconds = zeroFill(totalSeconds % 60);
    const minutes = zeroFill(Math.floor(totalSeconds / 60));

    return `${minutes}:${seconds}`;
  },
  render() {
    const { totalSeconds } = this.props;
    return (
      <div className="clock">
        <span className="clock__text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  },
});

module.exports = Clock;
