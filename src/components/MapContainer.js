import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withGoogleMap, GoogleMap } from 'react-google-maps';
import CustomMarker from './Marker';
import { latitude, longitude } from "./helpers/componentHelper";

class MapContainer extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {

    const Map = withGoogleMap(() => (
      <GoogleMap
        defaultCenter={{ lat: latitude(this.props), lng: longitude(this.props) }}
        defaultZoom={3}
      >
        <CustomMarker />
      </GoogleMap>
    ));

    return (
      <div className="col-md-8 p-2 map-wrap">
        <Map
          isMarkerShown
          containerElement={<div />}
          mapElement={<div id="map" className="p-2" />}
        >
        </Map>
      </div>
    );
  }

};

const mapStateToProps = state => {
  return {
    location: state.location,
  };
};

export default connect(mapStateToProps)(MapContainer);



