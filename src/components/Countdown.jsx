var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');


var Countdown = React.createClass({
  getInitialState: function () {
    return {count: 0};
  },
  onHandleSetCountdown: function (seconds) {
    this.setState({
      count: seconds
    });
  },
  render: function () {
    var {count} = this.state;
    return (
      <div>
        <h3>Countdown Component</h3>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.onHandleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
