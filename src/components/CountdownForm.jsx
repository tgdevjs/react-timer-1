var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();

    var strSeconds = this.refs.seconds.value;
    if(strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      var intSeconds = parseInt(strSeconds, 10);
      this.props.onSetCountdown(intSeconds);
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input ref="seconds" type="text" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
