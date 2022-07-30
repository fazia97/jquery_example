$(document).ready(function(){
 // header style app
 $("header li a").on('click',function(){
     $(this).
     addClass('active')
     .parent().
     siblings().
     find("a").
     removeClass('active')
 });
//  window app
var homeOffset=$(".home").offset().top;
console.log(homeOffset);
$(window).scroll(function(){
    var windowScroll=$(this).scrollTop()
    if(windowScroll>=50){
        $("header").addClass("changeHeader")
    }else{
        $("header").removeClass("changeHeader")
    }
})

// dynamic taps
// $("header a").click(function(){
//     var myId=$(this).attr('id');
//     $('body section').hide();
//     $('.'+myId).fadeIn();
// })

// filter images //mixitup jquery plugin
$(".tabs button").click(function(){
    var myClass=$(this).attr('class');
    if(myClass=='all') $(".images img").fadeIn();
    else{
        $(".images img").hide();
        $(".images ."+myClass).fadeIn();
    }
})

//smooth scroll header app
var headerHeight=$("header").height();
$("header a").click(function(){
    var id=$(this).attr("id");
    $('body,html').animate({
        scrollTop:$('.'+id).offset().top-headerHeight,
    })
})

//scrooll to top app càd lorsque je clique sur un buttoon il se montre directement en haut
$(window).scroll(function(){
    if($(this).scrollTop()>200){
        $(".scrollTop").show();
    }else{
        $(".scrollTop").hide();
    }
})
$(".scrollTop").click(function(){
    $('body,html').animate({
        scrollTop:0
    },500)
})

//calculate/countDown characters of textArea app
$("textarea").keyup(function(e){
    console.log(e.target.value.length );
   if(e.target.value.length >= 100){
       e.target.value=e.target.value.substr(0,100);
       alert("vous avez dépassé 100 caractères ");
   }
})
});