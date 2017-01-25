import React from 'react'

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
}

const Skilleby = {
  lat: 59.0442751,
  lng: 17.5959056
}

const TripleHBeef = {
  lat: 50.9785995,
  lng: 256
}
const TableHurst = {
  lat: 51.0984584,
  lng: 0.0442316
}

export default class Map extends React.Component {

  componentDidMount () {
    this.map = new google.maps.Map(this.refs.map, {
      center: EIFFEL_TOWER_POSITION,
      zoom: 2
    })

    var marker = new google.maps.Marker({
      position: Skilleby,
      map: this.map,
      title: 'Skilleby!'
    })

    var marker = new google.maps.Marker({
      position: TripleHBeef,
      map: this.map,
      title: 'Triple H Beef!'
    })
    var marker = new google.maps.Marker({
      position: TableHurst,
      map: this.map,
      title: 'Table Hurst!'
    })
  }

  render () {
    const mapStyle = {
      height: 300
    }

    return (
      <div ref='map' style={mapStyle}> Loading map...
           </div>
    )
  }

};
