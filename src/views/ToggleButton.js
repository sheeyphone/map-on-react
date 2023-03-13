import React from "react";
import { PropTypes } from "prop-types";
import "./ToggleButton.scss";

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.onToggleMap = this.onToggleMap.bind(this);
    this.onToggleLayer = this.onToggleLayer.bind(this);
  }
  static propTypes = {
    onToggleMap: PropTypes.any,
    onToggleLayer: PropTypes.any,
  };
  state = {
    mapVisible: true,
    layerVisible: true,
  };
  render() {
    let { mapVisible, layerVisible } = this.state;
    return (
      <>
        <div className="ButtonToggle" onClick={this.clickToggleMap}>
          Toggle Map
          <span className="ButtonToggleStatus">
            {mapVisible ? "ON" : "OFF"}
          </span>
        </div>
        <div className="ButtonToggle" onClick={this.clickToggleLayer}>
          Toggle Layer
          <span className="ButtonToggleStatus">
            {layerVisible ? "ON" : "OFF"}
          </span>
        </div>
      </>
    );
  }
  /* The component's methods should be defined below. */
  clickToggleMap = () => {
    let { mapVisible } = this.state;
    this.setState({ mapVisible: !mapVisible });
    this.onToggleMap(!mapVisible);
  };
  clickToggleLayer = () => {
    let { layerVisible } = this.state;
    this.setState({ layerVisible: !layerVisible });
    this.onToggleLayer(!layerVisible);
  };
  onToggleMap = (flag) => {
    if (this.props.onToggleMap) this.props.onToggleMap(flag);
  };
  onToggleLayer = (flag) => {
    if (this.props.onToggleLayer) this.props.onToggleLayer(flag);
  };
}

export default ToggleButton;
