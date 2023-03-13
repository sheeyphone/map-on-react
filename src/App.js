import "./App.scss";
import React from "react";
import { LMap, LTileLayer } from "./components/LMap";
import { LMapOver, LMapOverItem } from "./components/LMapOver";
import ToggleButton from "./views/ToggleButton";

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
        <LMapOver>
          <LMapOverItem bottom={15} right={15}>
            <ToggleButton
              onToggleMap={this.clickToggleMap}
              onToggleLayer={this.clickToggleLayer}
            />
          </LMapOverItem>
        </LMapOver>
      </div>
    );
  }
  /* The component's methods should be defined below. */
  clickToggleMap = (flag) => {
    this.setState({ mapVisible: flag });
  };
  clickToggleLayer = () => {
    let { layerVisible } = this.state;
    this.setState({ layerVisible: !layerVisible });
  };
}

export default App;
