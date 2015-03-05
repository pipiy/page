$(document).ready(function() {  
	if(navigator.userAgent.match(/(iPhone|iPad|iPod)/i)){ 
	 	$('.device').html('<a href="http://www.apple.com/" class="btn btn-primary"><h4>Скачать приложение</h4><p>и опробовать все функции Rcam <br> на своем Iphone</p></a>');
	} else if(navigator.userAgent.match(/(Android)/i)){
		$('.device').html('<a href="http://play.google.com" class="btn btn-primary"><h4>Скачать приложение</h4><p>и опробовать все функции Rcam <br> на своем Android</p></a>');
	} else {
		$('.device').html('<a href="http://m.my.rcam.by " class="btn btn-primary"><h4>Скачать приложение</h4><p>и опробовать все функции Rcam <br> на своем мобильном устройстве</p></a>')
	}
});