module.exports = function (address, callback) {
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
