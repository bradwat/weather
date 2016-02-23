$(document).ready(function(){
  var baseUrlGoogle = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  var baseUrlForcast = 'https://api.forecast.io/forecast/'

  var name = "Your Name";
//  $('#get-weather').on('click', getWeather);
  $('#get-weather').on('click', getCoordinates);

  function buildUrlGoogle(city){
    return baseUrlGoogle + city;
  }
  function buildUrlForecast(lat, lon){
    return baseUrlForecast + apiKeyForecast+'/'+lat+','+lon;
  }

//   function getWeather(){
//     var weatherLayer = new google.maps.weather.WeatherLayer({
//   temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
// });
//     var lat = $('#city').val();
//     var lon = $('#state').val();
//     var options = {
//       url: buildUrl(city, state),
//       dataType: 'jsonp',
//       success: successHandler,
//       error: errorHandler
//     };
  //   $.ajax(options);
  // }


  function successHandler(data){
    $('#output').text(JSON.stringify(data));
    console.log(data);
  }

  function errorHandler(err){
    console.log(err);
  }

      function getCoordinates(){
        var city = $('#city-zip').val();
        console.log("city: ",city);
        var ajaxOptions = {
              url: buildUrlGoogle(city),
            //dataType: 'jsonp',
              success: getWeatherInfo,
              error: errorHandler
            };
                  $.ajax(ajaxOptions);
    }

    function getWeatherInfo(data){
      var lat = data.results[0].geometry.location.lat;
      var lon = data.results[0].geometry.location.lng;
      console.log("lat: ",lat);
      console.log("lon: ",lon);
      var options = {
        url: buildUrlForecast(lat,lon),
        dataType: 'jsonp',
        success: successHandlerShowWeather,
        error: errorHandler,
      }
      $.ajax(options);
      function successHandlerShowWeather(data){
        // this will put the results in the html
      }
});
