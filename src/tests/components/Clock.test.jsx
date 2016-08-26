var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
      var renderedHTML = ReactDOM.findDOMNode(clock);
      var jQuerySelector = $(renderedHTML);
      var renderedAttribute = jQuerySelector.find('.clock-text');
      var actualRenderedText = renderedAttribute.text();
      expect(actualRenderedText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('should format seconds when min/seconds less than 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 65;
      var expected = '01:05';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });

});
