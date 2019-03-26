import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 37.557382,
      lng: 126.953889
    },
    zoom: 17
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '1280px' , margin: '0 auto' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD3dvsnA053WM9cF3HrUQB4V5v2dDjrAZE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={37.557382}
            lng={126.953889}
            
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default GoogleMap;