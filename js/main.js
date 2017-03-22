//b138aca5f679afcd22a1961e66aa5709
$('a').on('click', function(){
  var city = $(this).data('city');
  getCity(city);

})
getCity('Madrid,ES');



function getCity(city){



  $.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    data: {
      appid: 'b138aca5f679afcd22a1961e66aa5709',
      q: city,
      units: 'metric'
    },
    success: function(response){
      $('a').removeClass('active');

      var name = response.name;
      var temp = Math.round(response.main.temp) + "&#8451;";
      var desc = response.weather[0].description;
      var icon = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";

      $('h1').text(name);
      $('h2').html(temp);
      $('.img img').attr('src', icon);
      $('h3').text(desc);
      $('a[data-city="' + city + '"]').addClass('active');
    },

  });
}