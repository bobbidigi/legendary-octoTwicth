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
         
$.getJSON("https://wind-bow.gomix.me/twitch-api/users/"+ streamer +"?callback=?",function (data) {
   gamelink='<a href="https://www.twitch.tv/' + data.name + '" target="_blank" >'+game+'</a>';
   namelink= '<a href="https://www.twitch.tv/' + data.name + '" target="_blank" >' +data.display_name + '</a>';
               
//logo+name/////logo+name//////logo+name/////       
  if (data.logo==undefined) {
        uLogo='<div id="logo" class="float-left col-md-2"><img class="img-rounded" width="50px" height="50px" alt="Responsive image" src="https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png"><br>'+namelink+'</div>';
      
       }else if(data.status==404&&data.logo==undefined){
       uLogo='<div id="logo" class="float-left col-md-2"><img class="img-rounded" width="50px" height="50px" alt="Responsive image" src="https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png"><br>'+namelink+'</div>';   
            
        }else{
        uLogo='<div id="logo" class="float-left col-md-2"><img class="img-rounded" width="50px" height="50px" alt="Responsive image" src="'+data.logo+'"><br>'+namelink+'</div>';
    }
 ///status//on-off//////status//on-off///
 if (status=='offline'){
     $('#col').append('<div class="OFF">'+uLogo+'<span class="offline float-right">off</span></div><br><hr><br>');
   }else {
     $('#col').append('<div class="ON">' +uLogo+ 'playing'  +gamelink+ '<span class="online float-right">On</span></div><br><hr><br>');
   }
   /*if (data.status==404&&data.logo==undefined)
       $('#col').append('<div class="OFF col-md-12">' + '<i class="fa fa-question-circle fa-4x" aria-hidden="true"></i>' + '<a href="https://www.twitch.tv/' + data.name + '" target="_blank" >' +data.display_name + '</a>' + '<span class="offline">[404]</span>' + '<br><hr><br></div>');*/
  
  
  });
   });
  };
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