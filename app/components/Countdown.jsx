const React = require('react');
const Clock = require('Clock');

const Countdown = React.createClass({
  render() {
    return (
      <div>
        <Clock totalSeconds={129} />
      </div>
    );
  },
});

module.exports = Countdown;
