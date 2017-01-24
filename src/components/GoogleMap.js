import React from 'react'

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

export default class Map extends React.Component {

    componentDidMount() {
      this.map = new google.maps.Map(this.refs.map, {
        center: EIFFEL_TOWER_POSITION,
        zoom: 2
      });
    }

    render() {
      const mapStyle = {
        height: 300,
      };

      return (
          <div ref="map" style={mapStyle} />
      );
    }

};
