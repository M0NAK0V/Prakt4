var logimg, limg, eimg, logr, pasr, wt, warner, warnc, regb;
document.addEventListener("DOMContentLoaded",function(){
	logimg = document.getElementById("logimg");
	logr = document.getElementById("logr");
	pasr = document.getElementById("pasr");
	wt = document.getElementById("wt");
	warner = document.getElementById("warner");
	warnc = document.getElementById("warnc");
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
	window.addEventListener('keydown', checkCaps);
	logr.addEventListener('input', inpchr);
	pasr.addEventListener('input', inpchr);
	regb = false;
});

function checkCaps(event) {
    var caps = event.getModifierState && event.getModifierState('CapsLock');
	if (caps)
		warnc.style.display = "inline";
	else
		warnc.style.display = "none";
}

function chang(){
	if(regb && pasr.value && logr.value){
		let ch = ch1.checked ? 1 : ch2.checked ? 2 : 3;
		window.location.href = `home.php#login=${logr.value};pas=${pasr.value};ch=${ch}`;
	}
}

function gen_pas(){
    var password = "";
    var symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 15; i++){
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));     
    }
    pasr.value = password;
	navigator.clipboard.writeText(password);
	wt.innerHTML = `Сгенерирован пароль: ${password}. Он скопирован в буфер обмена`;
	warner.style.display = "inline";
	setTimeout(function (){
		warner.style.display = "none";
		wt.innerHTML = `Допустимы только латинница и цифры`;
	}, 10000);
}

function inpchr(event){
	var dat = event.target;
	regb = !(dat.validity.patternMismatch || dat.value.length == 0);
	if (dat.validity.patternMismatch || dat.value.length == 0) {
		dat.style.animation = "but 1s ease infinite";
		setTimeout(function () {dat.style.animation = "none"}, 1000)
		dat.style.outline = "solid red";
		warner.style.display = "inline";
	} else {
		dat.style.outline = "none black";
		warner.style.display = "none";
	}
}