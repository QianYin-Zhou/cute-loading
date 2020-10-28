var per = 0;
var timer = null;
timer = setInterval(function(){
	var bar = document.getElementsByClassName('bar')[0];
	bar.style.width = per + '%';
	per += 1;
	if(per > 100) {
		document.getElementsByClassName('pageLoading')[0].classList.add('over');
		clearInterval(timer);
	}
},40) 