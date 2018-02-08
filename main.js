$(document).ready(function(){
    $("#mytitle").hide();
    $("#mytitlesmall").hide();
    $("#mytitle").slideDown(600);
    $("#mytitlesmall").slideDown(600);
    
    $("#extra").hide();
    $(".bioContainer2").click(function(){
        $("#extra").slideToggle(300);
    });
});
