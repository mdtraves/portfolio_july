$(document).ready(function(){
    $("#mytitle").hide();
    $("#mytitlesmall").hide();
    $("#mytitle").fadeIn(1500);
    $("#mytitlesmall").fadeIn(2000);
    
    $("#extra").hide();
    $(".bioContainer2").click(function(){
        $("#extra").fadeToggle(800);
    });
    $(".gallerypicbox").click(function(){
        $(this).toggleClass("col-md-12");
    });
    
});




