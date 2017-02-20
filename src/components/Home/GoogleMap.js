const React = require('react')

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
}

class Map extends React.Component {
  componentDidMount () {
    this.map = new google.maps.Map(this.refs.map, {
      center: EIFFEL_TOWER_POSITION,
      zoom: 2
    })
  }

  componentDidUpdate () {
    const farms = this.props.farms
    const forGeocoding = this.props.forGeocoding
    const arrOfFarms = farms.map((farm) => {
      return new google.maps.Marker({
        position: {lat: farm.latitude, lng: farm.longitude},
        map: this.map,
        title: farm.name
      })
    })
    this.FindLatLong(forGeocoding, function (result) {
      console.log(result, 'geocodeAddress result')
    })
    return arrOfFarms
  }

  FindLatLong (address, callback) {
    var geocoder = new google.maps.Geocoder()
    geocoder.geocode({ 'address': address }, function (results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        console.log(results[0].geometry.location, 'result?')
        var lat = results[0].geometry.location.lat()
        var lng = results[0].geometry.location.lng()
        callback({ Status: "OK", Latitude: lat, Longitude: lng })
      }
    })
  }

  render () {
    const mapStyle = {
      height: 400
    }

    return (
      <div ref='map' style={mapStyle}> Loading map...
           </div>
    )
  }

}
module.exports = (Map)

// // This event listener will call addMarker() when the map is clicked.
// map.addListener('click', function(event) {
//   addMarker(event.latLng);
// });

// Adds a marker to the map and push to the array.
// function addMarker(location) {
//         var marker = new google.maps.Marker({
//           position: location,
//           map: map
//         });
//         markers.push(marker);
//       }

// Sets the map on all markers in the array.
//       function setMapOnAll(map) {
//         for (var i = 0; i < markers.length; i++) {
//           markers[i].setMap(map);
//         }
//       }
// Shows any markers currently in the array.
// function showMarkers() {
//   setMapOnAll(map);
// }
