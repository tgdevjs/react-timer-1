var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });
  // var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
  // var renderedHTML = ReactDOM.findDOMNode(clock);
  // var jQuerySelector = $(renderedHTML);
  // var renderedAttribute = jQuerySelector.find('.clock-text');
  // var actualRenderedText = renderedAttribute.text();
  // expect(actualRenderedText).toBe('01:02');

  describe('render', () => {
    it('should render pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var renderedHTML = ReactDOM.findDOMNode(controls);
      var jQuerySelector = $(renderedHTML);
      var $pauseButton = jQuerySelector.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });

    it('should render start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var renderedHTML = ReactDOM.findDOMNode(controls);
      var jQuerySelector = $(renderedHTML);
      var $startButton = jQuerySelector.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
