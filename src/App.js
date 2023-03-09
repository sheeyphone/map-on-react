import "./App.css";
import React from "react";
import { LMap, LTileLayer } from "./components/LMap";

const osmUrl = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LMap mapId={"LMapDemo"}>
          <LTileLayer url={osmUrl} options={{ maxZoom: 19 }} />
        </LMap>
      </div>
    );
  }
}

export default App;
