var React = require('react');
var Clock = require('Clock');


var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Countdown Component</h3>
        <Clock totalSeconds={62}/>
      </div>
    );
  }
});

module.exports = Countdown;
