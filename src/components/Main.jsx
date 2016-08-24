var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <p>Main Component</p>
        <div>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
