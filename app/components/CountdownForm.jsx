const React = require('react');

const CountdownForm = React.createClass({
  propTypes: {
    onSetCountdown: React.PropTypes.func.isRequired,
  },
  onSubmit(e) {
    e.preventDefault();
    const strSeconds = this.secondsRef.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.secondsRef.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },
  render() {
    return (
      <form onSubmit={this.onSubmit} className="countdown__form">
        <input
          type="text"
          ref={(node) => { this.secondsRef = node; }}
          placeholder="Enter time in seconds"
        />
        <button type="submit" className="button expanded">
          Start
        </button>
      </form>
    );
  },
});

module.exports = CountdownForm;
