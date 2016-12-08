$(function() {

  // your code will go here
  $.ajax({
    url:'https://www.codeschool.com/users/Ginja_Beard.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log(response.courses.completed.length);
      var completed = response.courses.completed;
      for(var i = 0; i < completed.length; i++ ){
        var badgeDiv = $('<div></div>').addClass('course').appendTo('#badges');
        $('<h3>'+completed[i].title+'</h3>').appendTo(badgeDiv);
        $('<img src="'+completed[i].badge+'" />').appendTo(badgeDiv);
        $('<a href="'+completed[i].url+'">Go To Course</a>').addClass('btn btn-primary').appendTo(badgeDiv);
      }
    }
  });
});
