function menuButton(){
  $(document).ready(function(){
    $(".menu-button").click(function(){
      $(".navigation-list").toggle(500);
    });
  });
}
function expand(){

  var readMore = $("#expand");
  var readLess = $("#shrink");
  var span = $("#span");
  
  readMore.attr("type","button");
  readLess.attr("type","button");
  
  //read more
  $("#expand").click(function(){
    $("#span").toggle(function(){
      $("#expand").hide();
    });
  });
  //read less
  $("#shrink").click(function(){
    $("#span").hide(function(){
      $("#expand").show();
    });
  });
  
}

menuButton();
expand();
