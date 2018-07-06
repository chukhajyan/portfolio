import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import './style.less';

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `240px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 40.193456, lng: 44.503604 }}
  >
    {props.isMarkerShown && <Marker position={{ lat:40.193456, lng: 44.503604 }} />}
  </GoogleMap>
);

class MapComponent extends Component {
  render() {
    return (
      <MyMapComponent isMarkerShown />
    );
  }
}

export default MapComponent;
