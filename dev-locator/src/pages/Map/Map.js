import React, { Component, Fragment } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import devList from '../../components/devList/devList';
import 'mapbox-gl/dist/mapbox-gl.css';

export default class Map extends Component {
  state = {
    viewport: {
      width: 600,
      height: 600,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: 600,
        height: 600,
      },
    });
  };

  handleMapClick(e) {
    const [latitude, longitude] = e.lngLat;

    alert(`Latitude: ${latitude} \nLongitude: ${longitude}`);
  }

  render() {
    return (
      <Fragment>
        <MapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
          onViewportChange={viewport => this.setState({ viewport })}
        >
          <Marker
            latitude={-23.5439948}
            longitude={-46.6065452}
            onClick={this.handleMapClick}
            captureClick
          >
            <img
              alt="test"
              style={{
                borderRadius: 80,
                width: 48,
                height: 48,
              }}
              src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            />
          </Marker>
        </MapGL>
        <br />
        <devList />
      </Fragment>
    );
  }
}
