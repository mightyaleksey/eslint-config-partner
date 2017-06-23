'use strict';

const {Component} = require('react');
const PropTypes = require('prop-types');
const React = require('react');

class Button extends Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(e) {
    this.props.onClick(e);
  }
  render() {
    const {children,className} = this.props;
    return (
      <Button
        className={className}
        onClick={this._onClick}>{children}</Button>
      );
  }
}

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

module.exports = Button;
