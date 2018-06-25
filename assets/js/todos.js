// Check Off Specifics Todos by Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click","span",function(e){	
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
	//Check enter keypress
	if(e.which==13){
		//grabbing new todo text from imput
		var todoText = $(this).val();
		//erase input text
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ todoText +"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});