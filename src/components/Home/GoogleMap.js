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
    return arrOfFarms
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
