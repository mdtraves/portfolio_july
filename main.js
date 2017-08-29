$(document).ready(function(){
    $("#mytitle").hide();
    $("#mytitlesmall").hide();
    $("#mytitle").show("slide");
    $("#mytitlesmall").show("puff");
    
    
    $('img, a').hover(function(){
   $(this).css("transform", "scale(1.01, 1.01)");
}, function(){
   $(this).css("transform", "none");
});
    
});