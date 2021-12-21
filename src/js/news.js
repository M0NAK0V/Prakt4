var logimg, limg, eimg;
document.addEventListener("DOMContentLoaded",function(){
	logimg = document.getElementById("logimg");
	let hsh = window.location.hash.split(";");
	var ch1 = new Image();
	ch1.src = "media/ls-icon1.png";
	ch1.id = 'limg';
	var ch2 = new Image();
	ch2.src = "media/ls-icon2.png";
	ch2.id = 'limg';
	var ch3 = new Image();
	ch3.src = "media/ls-icon3.png";
	ch3.id = 'limg';
	var edit = new Image();
	edit.src = "media/edit.png";
	edit.id = 'eimg';
	let icons = [ch1, ch2, ch3];
	logimg.innerHTML = '';
	logimg.appendChild(icons[parseInt(hsh[2].split('=')[1])-1]);
	var tlog = document.createElement("span");
	tlog.id = 'tlog';
	tlog.innerHTML = hsh[0].split('=')[1];
	logimg.appendChild(tlog);
	logimg.appendChild(edit);
	limg = document.getElementById("limg");
	eimg = document.getElementById("eimg");
	for(let blocks of document.querySelectorAll( "a" )){
		blocks.href += window.location.hash;
	}
});