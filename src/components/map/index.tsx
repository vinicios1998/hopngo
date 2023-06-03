import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, lat, lng }:{text:string, lat:number, lng:number}) => <div>teste {text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
      yesIWantToUseGoogleMapApiInternals={false}
        // bootstrapURLKeys={{ key: "AIzaSyCgKhr4o6KXqYrzwl-tqgltHRtIsHcTsJE" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}