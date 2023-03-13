import React from "react";
import { PropTypes } from "prop-types";
import "./LMapOver.scss";

function isNumber(n) {
  return Number(n) === n;
}

class LMapOver extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };
  render() {
    let { children } = this.props;
    return <div className="LMapOver">{children}</div>;
  }
}

class LMapOverItem extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    top: PropTypes.any,
    bottom: PropTypes.any,
    left: PropTypes.any,
    right: PropTypes.any,
  };
  render() {
    let { children, top, bottom, left, right } = this.props;
    let styleInsert = {};
    if (isNumber(top)) {
      styleInsert.top = top;
    }
    if (isNumber(bottom)) {
      styleInsert.bottom = bottom;
    }
    if (isNumber(left)) {
      styleInsert.left = left;
    }
    if (isNumber(right)) {
      styleInsert.right = right;
    }
    return (
      <div className="LMapOverItem" style={styleInsert}>
        {children}
      </div>
    );
  }
}

export { LMapOver, LMapOverItem };
