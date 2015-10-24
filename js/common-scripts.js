// sidebar toggle

$(function() {
    function responsiveView() {
        var wSize = $(window).width();
        if (wSize <= 768) {
            $('#container').addClass('sidebar-close');
            $('#sidebar > ul').hide();
        }

        if (wSize > 768) {
            $('#container').removeClass('sidebar-close');
            $('#sidebar > ul').show();
        }
    }
    $(window).on('load', responsiveView);
    $(window).on('resize', responsiveView);
});

$('.fa-bars').click(function () {
    if ($('#sidebar > ul').is(":visible") === true) {
        $('#main-content').css({
            'margin-left': '0px'
        });
        $('#sidebar').css({
            'margin-left': '-210px'
        });
        $('#sidebar > ul').hide();
        $("#container").addClass("sidebar-closed");
    } else {
        $('#main-content').css({
            'margin-left': '210px'
        });
        $('#sidebar > ul').show();
        $('#sidebar').css({
            'margin-left': '0'
        });
        $("#container").removeClass("sidebar-closed");
    }
});
$(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 600) {
        
    	$(".black-bg.header").css("background-color", "#0dc0c0");
    } else {
       $(".black-bg.header").css("background-color", "#424a5d");
    }
}); 
$(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll >= 600) {
        
    	$(".aside").css("background-color", "#0dc0c0");
    } else {
       $(".aside").css("background-color", "#424a5d");
    }
}); 
// descripciob
var keywords = [ "Web Developer", "Front End"];
          var colours = ["#FF017E", "#FFF","#FF017E", "#FFF"];
          var count = 1;
          setInterval(function(){    
              $("h2#cycle-fade").fadeOut(700, function(){                 
                $(this).html(keywords[count]).css("color", colours[count]);
          count++;        
            if(count == keywords.length)            
                count = 0;        
                $(this).fadeIn(00);    
            });
          }, 2000);