$(document).ready(function(){
    $('.header').height($(window).height());
    $("body,html").animate({scrollTop:0},500);
    $(".description").animate({top: '60%'}, 1500);
    $(".navbar").fadeIn(1500);
});

$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000);
 })
 $(".btn-more").click(function(){
     $("body,html").animate({
         scrollTop:$("#" + $(this).data('value')).offset().top
     },1000);
});
