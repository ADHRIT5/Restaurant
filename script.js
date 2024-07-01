$("button").hover(function(){
    $(this).addClass("afterHover");
},function(){
    $(this).removeClass("afterHover");
});

$(".food").hover(function(){
    $(this).addClass("afterHoverf");
    $(this).removeClass("afterHoverg");
    
},function(){
    $(this).addClass("afterHoverg");
});

$(".final").click(function(){
    $(".adhrit").addClass("afterClick");
});

$(".aButton").click(function(){
    $(".adhrit").removeClass("afterClick");
})
