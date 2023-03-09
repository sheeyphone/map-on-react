import React from "react";
import { PropTypes } from "prop-types";
import "./LMap.scss";

/*
 The MapContext functions to interchange data 
 between LMap and other layers.
 */
const MapContext = React.createContext(null);

/*
 LMap is a base map container, specifying the unique 
 parameter 'mapId', which would create the leaflet 
 map context instead.
*/
class LMap extends React.Component {
  constructor(props) {
    super(props);
    this.map = null;
  }
  state = {
    mapCtx: null,
    mapConfig: {
      center: [22.65, 114.22],
      zoom: 9,
      minZoom: 5,
      maxZoom: 18,
      layers: [],
      zoomControl: false,
      attributionControl: false,
    },
  };
  static propTypes = {
    children: PropTypes.any,
    mapId: PropTypes.string.isRequired,
    onMapReady: PropTypes.any,
  };
  componentDidMount() {
    this._initialMap(this.props.mapId);
  }
  componentWillUnmount() {
    this._deconstructMap();
  }
  render() {
    const { mapCtx } = this.state;
    const { mapId, children } = this.props;
    return (
      <>
        <div className="LMap" id={mapId}></div>
        <MapContext.Provider value={mapCtx}>{children}</MapContext.Provider>
      </>
    );
  }
  /* The component's methods should be defined below. */
  _initialMap(mapId) {
    let state = this.state;
    let props = this.props;
    if (!mapId) {
      throw Error("You should specify the unique mapId props.");
    }
    if (!this.map) {
      let map = L.map(props.mapId, state.mapConfig);
      this.map = map;
      this.setState({ mapCtx: map });
    }
  }
  _deconstructMap() {
    if (this.map !== null) {
      this.map.remove();
      this.map = null;
    }
  }
  _onMapReady = (map) => {
    this.props.onMapReady(map);
  };
}

class LTileLayer extends React.Component {
  static contextType = MapContext;
  static propTypes = {
    url: PropTypes.string.isRequired,
    options: PropTypes.any,
  };
  render() {
    this._initialLayer();
    return <></>;
  }
  /* The component's methods should be defined below. */
  _initialLayer() {
    const map = this.context;
    const { url, options } = this.props;
    if (map) {
      let tileLayer = L.tileLayer(url, options);
      tileLayer.addTo(map);
    }
  }
}

export { MapContext, LMap, LTileLayer };
