//testing 
// alert("hello world");
//flashlight function
$("body").mousemove(function(){
	$(".flashlight").css("top", event.clientY-150).css("left", event.clientX-150)
});

//boom interaction
$(".orange").mouseleave(function(){
	$(this).animate({bottom: 80}, 150).delay(800).animate({bottom: -400},1000);
	$("body").css("background","white");
	$("h1").css("color","white");
	$("h2").css("color","white");
});
//clue/switch
$(".clue").click(function(){
	$("body").css("background-color","white");
});
