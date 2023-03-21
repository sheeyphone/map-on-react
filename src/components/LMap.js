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
  static propTypes = {
    children: PropTypes.any,
    mapId: PropTypes.string.isRequired,
    configs: PropTypes.any,
    onMapReady: PropTypes.any,
  };
  state = {
    mapReady: false, // use only once!
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
  componentDidMount() {
    this._initialMap();
  }
  componentWillUnmount() {
    this._deconstructMap();
  }
  render() {
    const map = this.map;
    const { mapReady } = this.state;
    const { mapId, children } = this.props;
    return (
      <div className="LMap" id={mapId}>
        {mapReady && (
          <MapContext.Provider value={map}>{children}</MapContext.Provider>
        )}
      </div>
    );
  }
  /* The component's methods should be defined below. */
  _initialMap() {
    let { mapId, configs } = this.props;
    if (!mapId) {
      throw Error("You should specify the unique mapId props.");
    }
    if (!this.map) {
      let mapConfigDef = { ...this.state.mapConfig };
      if (configs) {
        mapConfigDef = {
          ...configs,
        };
      }
      let map = L.map(mapId, mapConfigDef);
      this.map = map;
      this.setState({ mapReady: true });
    }
  }
  _deconstructMap() {
    if (this.map !== null) {
      this.map.remove();
      this.map = null;
      this.setState({ mapReady: false });
    }
  }
  _onMapReady = (map) => {
    this.props.onMapReady(map);
  };
}

class LTileLayer extends React.Component {
  constructor() {
    super();
    this.tileLayer = null;
  }
  static contextType = MapContext;
  static propTypes = {
    url: PropTypes.string.isRequired,
    options: PropTypes.any,
  };
  componentDidMount() {
    this._initialLayer();
  }
  componentWillUnmount() {
    this._removeLayer();
  }
  render() {
    this._initialLayer();
    return <></>;
  }
  /* The component's methods should be defined below. */
  _initialLayer() {
    const map = this.context;
    const { url, options } = this.props;
    if (map && !this.tileLayer) {
      let tileLayer = L.tileLayer(url, options);
      tileLayer.addTo(map);
      this.tileLayer = tileLayer;
    }
  }
  _removeLayer() {
    if (this.tileLayer) {
      this.tileLayer.remove();
      this.tileLayer = null;
    }
  }
}

export { MapContext, LMap, LTileLayer };
