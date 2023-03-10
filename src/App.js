import "./App.scss";
import React from "react";
import { LMap, LTileLayer } from "./components/LMap";

const osmUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

class App extends React.Component {
  state = {
    mapVisible: true,
    layerVisible: true,
  };
  render() {
    let { mapVisible, layerVisible } = this.state;
    return (
      <div className="App">
        {mapVisible && (
          <LMap mapId={"LMapDemo"}>
            {layerVisible && (
              <LTileLayer url={osmUrl} options={{ maxZoom: 19 }} />
            )}
          </LMap>
        )}
        <div className="OverMap">
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
        </div>
      </div>
    );
  }
  /* The component's methods should be defined below. */
  clickToggleMap = () => {
    let { mapVisible } = this.state;
    this.setState({ mapVisible: !mapVisible });
  };
  clickToggleLayer = () => {
    let { layerVisible } = this.state;
    this.setState({ layerVisible: !layerVisible });
  };
}

export default App;
