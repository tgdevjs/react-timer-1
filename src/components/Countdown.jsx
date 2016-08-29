var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  componentWillUnmount: function () {
    this.stopTimer();
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.countdownStatus != prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
          // Don't use break and allow stopTimer() in paused case to be called
        case 'paused':
          this.stopTimer();
          break;
      }
    }
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >=0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  stopTimer: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus:'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState(
      {countdownStatus: newStatus}
    );
  },
  render: function () {
    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      if (countdownStatus === 'stopped') {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }else {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      }
    };
    return (
      <div>
        <h3>Countdown Component</h3>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
