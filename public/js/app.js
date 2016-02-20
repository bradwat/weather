$(document).ready(function(){
  var baseUrlGoogle = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  
  var name = "Your Name";
//  $('#get-weather').on('click', getWeather);
  $('#get-weather').on('click', showInfo);

  function buildUrl(city,state){
    return baseUrl + apiKey+'/'+lat+','+lon;
  }

  function getWeather(){
    var weatherLayer = new google.maps.weather.WeatherLayer({
  temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT
});
    var lat = $('#city').val();
    var lon = $('#state').val();
    var options = {
      url: buildUrl(city, state),
      dataType: 'jsonp',
      success: successHandler,
      error: errorHandler
    };

    $.ajax(options);
  }


  function successHandler(data){
    $('#output').text(JSON.stringify(data));
    console.log(data);
  }

  function errorHandler(err){
    console.log(err);
  }

      function showInfo(){
        var city = $('#').val();
        var state = $('#').val();
        var ajaxOptions = {
              url: buildUrl(city,state),
              dataType: 'jsonp',
              success: showInfoSuccess,
              error: errorHandler
            };
                  $.ajax(ajaxOptions);
    }

    function showInfoSuccess(data){
      console.log(data);
      var source= $('#info').html();
      var template= Handlebars.compile(source);
      var extractedData = {
        City: data.City,

        icon: data.currently.icon,
          summary:data.currently.summary,
            time:moment(data.currently.time).format('MMMM Do YYYY, h:mm:ss a')

        };
  var html = template(extractedData);
  $('#test-output').html(html);
  }
});
