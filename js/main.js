$(document).ready(funtion(){
	var altura=$('.navbar').offset().top;
	alert(altura);

	$(window).on('scroll', funtion(){
		if ($(window).scrollTop() > altura) {

		}else{

		}
	})
});