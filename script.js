$(document).ready(function() {
  var streamers = ["monstercat", "Ninja", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "noobs2ninjas", "bcamp", "habathcx", "RobotCaleb"];
  
  function fillDetails(streamer) {
       $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/"+ streamer +"?callback=?", function (data) {
         if (data===null)
           var exists = 'false';
         if (data.stream===null){
           var status='offline';  
         }

         if (data.stream!==null) {
           var displayname = data.stream.channel.display_name;
           var game = data.stream.channel.game;
         }
         
    $.getJSON("https://wind-bow.gomix.me/twitch-api/users/"+ streamer +"?callback=?", function (data) {
  // console.log(data)
      // gamelink ='<a href="https://www.twitch.tv/' + data.name + '" target="_blank" >' + game + '</a>';
      gamelink='<a href="https://www.twitch.tv/' + data.name + '" target="_blank" >'+game+'</a>';
      // gamelink ='<a href="https://www.twitch.tv/' + data.game + '" target="_blank" >' +data.game + '</a>';
      namelink= '<a href="https://www.twitch.tv/' + data.name + '" target="_blank" >' +data.display_name + '</a>';
               
       
  if (data.logo==undefined) {
        uLogo='<img src="https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png">';
        }else{
        uLogo='<img src="'+data.logo+'">';
    }
 
 if (status=='offline'){
     $('#col').append('<div class="OFF">' +uLogo + namelink + '<span class="offline"> (offline)</span> <br><hr><br></div>');
   }else {
     $('#col').append('<div class="ON">' +uLogo + namelink + 'now playing' + gamelink + '<span class="online">(Online)</span>'+'<br><hr><br></div>');
     // $('#col').append(uLogo + namelink + 'now playing' + gamelink + '<span class="online">(Online)</span>'+'<br><hr><br>');
     // console.log(game);
   }
    // $('#col').append(uLogo + namelink + 'now playing \"' + game + '\" <span class="online">(Online)</span>'+'<br><hr><br>');
    /*$('#col').append('<img src="'+data.logo+'"> <a href="https://www.twitch.tv/' + data.name + '" target="_blank" >' +data.display_name + '</a><span class="offline"> (Offline)</span> <br><hr><br>');*/
   
    
  // $('#col').addClass('online');  
    
   
      
  if (data.status==404&&data.logo==undefined)
       $('#col').append('<div class="OFF">' + '<i class="fa fa-question-circle fa-3x" aria-hidden="true"></i>' + '<a href="https://www.twitch.tv/' + data.name + '" target="_blank" >' +data.display_name + '</a>' + '<span class="offline">(404)</span>' + '<br><hr><br></div>');
      
      // console.log(data.status);
  
  });
   });
  };
  // for (x=0; x<5; x++) {
  for (x=0; x<streamers.length; x++) {
    fillDetails(streamers[x], [x]);
    
  };
  $('.someButton').click(function() {
    var searchFieldValue=document.getElementById('searchId').value;
    fillDetails(searchFieldValue, 5)
  });
  $("#on").click(function() {
    $("div.OFF").hide();  
  });
  $("#off").click(function() {
    $("div.OFF").show();
    $("div.ON").hide();
  });
  $("#all").click(function() {
    $("div.OFF").show();
    $("div.ON").show();
  });
  
 
  
});//===document