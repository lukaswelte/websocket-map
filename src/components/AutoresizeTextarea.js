import React from 'react';
import autosize from 'autosize';

const UPDATE = 'autosize:update',
  DESTROY = 'autosize:destroy',
  RESIZED = 'autosize:resized';

const AutoresizeTextarea = React.createClass({

  propTypes: {
    onResize: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      rows: 1
    };
  },

  componentDidMount() {
    autosize(this.textarea);
    if (this.props.onResize) {
      this.textarea.addEventListener(RESIZED, this.props.onResize);
    }
  },

  componentWillUnmount() {
    if (this.props.onResize) {
      this.textarea.removeEventListener(RESIZED);
    }
    this.dispatchEvent(DESTROY);
  },

  dispatchEvent(EVENT_TYPE, defer) {
    const event = document.createEvent('Event');
    event.initEvent(EVENT_TYPE, true, false);
    const dispatch = () => this.textarea.dispatchEvent(event);
    if (defer) {
      setTimeout(dispatch);
    } else {
      dispatch();
    }
  },

  getValue(props) {
    if (props) {
      return props.valueLink ? props.valueLink.value : props.value;
    }
  },

  render() {
    return (
      <textarea {...this.props} ref={(n) => this.textarea = n}>
        {this.props.children}
      </textarea>
    );
  },

  componentWillReceiveProps(nextProps) {
    if (this.getValue(nextProps) !== this.getValue(this.props)) {
      this.dispatchEvent(UPDATE, true);
    }
  },
});

export default AutoresizeTextarea;
