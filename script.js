var twitchChannels = [ "edxtv", "codefortea", "OgamingSC2", "cretetion", "freecodecamp", "frinlet", "meteordev", "syntag", "habathcx", "RobotCaleb", "lol_peanut", "faker", "noobs2ninjas","SanchoWest","eleaguetv", "eulcs1", "team_treehouse", "xx_raptor_a4_xx", "awmanthisguy", "microwavesam", "greekgodx", "doublelift","ESL_SC2", "Ninja"];
var url; //streams url
var url2; //channels url

$(document).ready(function() {
  //loop through the array
    $.each(twitchChannels, function(i, name) {
      url = 'https://api.twitch.tv/kraken/streams/' + name +'?client_id=eir670qpgheia6u9kzlbpjaj8067cm';
  //first ajax call to stream url to check online status
        $.getJSON(url, function(data) {
  //check if channel is online
          if(data.stream == null){
            url2 = 'https://api.twitch.tv/kraken/channels/' + name + '?client_id=eir670qpgheia6u9kzlbpjaj8067cm';
    //if not, 2nd ajax call to channels for more information
            $.getJSON(url2, function(data2) {
              $('#resultList').append('<div class = "col-xs-2 col-md-offset-2 col-md-2 colorOfline">' + '<img src='+ data2.logo + '></div>');
              $('#resultList').append('<div class= "col-xs-5 col-md-2 colorOfline"><p><b>' + '<a href=' + data2.url +' target="_blank">' + data2.display_name +'</b></a></p></div>');
              $('#resultList').append('<div class= "col-xs-5 col-md-4 colorOfline"><p><span><b> OFFLINE </b></span></p></div>');
            });
          } else {
              $('#resultList').append('<div class = "col-xs-2 col-md-offset-2 col-md-2 colorOnline">' + '<img src='+ data.stream.channel.logo + '></div>');
              $('#resultList').append('<div class= "col-xs-5 col-md-2 colorOnline"><p><b>' + '<a href=' + data.stream.channel.url +' target="_blank">' + data.stream.channel.display_name +'</a></b></p></div>');
              $('#resultList').append('<div class= "col-xs-5 col-md-4 colorOnline"><p><b>' + data.stream.game + '</b></p></div>');

          }
      });
    });
//on click show online channel change buttons collors
    $('#online').click(function(){
      $('#online').css('background-color', '#757571');
      $('#online').css('color', '#fff');
        $('#online').css('border-color', 'rgba(33,165,145,0)');
      $('#offline').css('background-color', '');
      $('#offline').css('color', '#6441A5');
      $('#all').css('background-color', '#F5F4F4');
      $('#all').css('color', '#6441A5');
      $('.colorOfline').css('display', 'none');
      $('.colorOnline').css('display', 'block');
    });
//on click show offline channles change button collors
    $('#offline').click(function(){
      $('#offline').css('background-color', '#757571');
      $('#offline').css('color', '#fff');
        $('#offline').css('border-color', 'rgba(33,165,145,0)');
      $('#online').css('background-color', '');
      $('#online').css('color', '#6441A5');
      $('#all').css('background-color', '#F5F4F4');
      $('#all').css('color', '#6441A5');
      $('.colorOnline').css('display', 'none');
      $('.colorOfline').css('display', 'block');
    })
//on click show all channesl (refresh page);
    $('#all').click(function(){
      location.reload(true);

    })

});






/*var twitchChannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas","SanchoWest","eleaguetv", "eulcs1", "xx_raptor_a4_xx"];
var url; //streams url
var url2; //channels url

$(document).ready(function() {
  //loop through the array
    $.each(twitchChannels, function(i, name) {
      url = 'https://api.twitch.tv/kraken/streams/' + name +'?client_id=eir670qpgheia6u9kzlbpjaj8067cm';
  //first ajax call to stream url to check online status
        $.getJSON(url, function(data) {
  //check if channel is online
          if(data.stream == null){
            url2 = 'https://api.twitch.tv/kraken/channels/' + name + '?client_id=eir670qpgheia6u9kzlbpjaj8067cm';
    //if not, 2nd ajax call to channels for more information
            $.getJSON(url2, function(data2) {
              $('#resultList').append('<div class = "col-xs-2 col-md-offset-2 col-md-2 colorOfline">' + '<img src='+ data2.logo + '></div>');
              $('#resultList').append('<div class= "col-xs-5 col-md-2 colorOfline"><p><b>' + '<a href=' + data2.url +' target="_blank">' + data2.display_name +'</b></a></p></div>');
              $('#resultList').append('<div class= "col-xs-5 col-md-4 colorOfline"><p><span><b> OFFLINE </b></span></p></div>');
            });
          } else {
              $('#resultList').append('<div class = "col-xs-2 col-md-offset-2 col-md-2 colorOnline">' + '<img src='+ data.stream.channel.logo + '></div>');
              $('#resultList').append('<div class= "col-xs-5 col-md-2 colorOnline"><p><b>' + '<a href=' + data.stream.channel.url +' target="_blank">' + data.stream.channel.display_name +'</a></b></p></div>');
              $('#resultList').append('<div class= "col-xs-5 col-md-4 colorOnline"><p><b>' + data.stream.game + '</b></p></div>');

          }
      });
    });
//on click show online channel change buttons collors
    $('#online').click(function(){
      $('#online').css('background-color', '#757571');
      $('#online').css('color', '#fff');
      $('#offline').css('background-color', '');
      $('#offline').css('color', '');
      $('#all').css('background-color', '#F5F4F4');
      $('#all').css('color', '#000000');
      $('.colorOfline').css('display', 'none');
      $('.colorOnline').css('display', 'block');
    });
//on click show offline channles change button collors
    $('#offline').click(function(){
      $('#offline').css('background-color', '#757571');
      $('#offline').css('color', '#fff');
      $('#online').css('background-color', '');
      $('#online').css('color', '');
      $('#all').css('background-color', '#F5F4F4');
      $('#all').css('color', '#000000');
      $('.colorOnline').css('display', 'none');
      $('.colorOfline').css('display', 'block');
    })
//on click show all channesl (refresh page);
    $('#all').click(function(){
      location.reload(true);

    })

});*/

