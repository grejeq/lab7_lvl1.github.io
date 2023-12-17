let forma = document.querySelector("#forma");
let enter = document.getElementById("enter")
enter.onclick = function(){
    forma.style.display = "block";
}
remove_button.onclick = function(){
    forma.style.display = "none";
}
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 75) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});