var vxod, reg, r, v, warnc, logv, logr, pasv, pasr, warnev, warner, warnew, regb, vxodb, ch1, ch2, ch3, wt, butr, butv, warncr, posform;
window.onload = function(){
	vxod = document.getElementById("vxod");
	reg = document.getElementById("reg");
	r = document.getElementById("r");
	v = document.getElementById("v");
	warnc = document.getElementById("warnc");
	warncr = document.getElementById("warncr");
	warnev = document.getElementById("warnev");
	warner = document.getElementById("warner");
	warnew = document.getElementById("warnew");
	logv = document.getElementById("logv");
	logr = document.getElementById("logr");
	pasv = document.getElementById("pasv");
	pasr = document.getElementById("pasr");
	ch1 = document.getElementById("ch1");
	ch2 = document.getElementById("ch2");
	ch3 = document.getElementById("ch3");
	wt = document.getElementById("wt");
	butr = document.getElementById("butr");
	butv = document.getElementById("butv");
	butv = document.getElementById("butv");
	posform = document.getElementById("posform");
	window.addEventListener('keydown', checkCaps);
	logv.addEventListener('input', inpchv);
	logr.addEventListener('input', inpchr);
	pasv.addEventListener('input', inpchv);
	pasr.addEventListener('input', inpchr);
	regb = false;
	vxodb = false;
}

function kon(){
    window.scrollTo(0, window.innerHeight);
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

function inpchv(event){
	var dat = event.target;
	if (dat.validity.patternMismatch || dat.value.length == 0) {
		dat.style.animation = "but 1s ease infinite";
		setTimeout(function () {dat.style.animation = 'none'}, 1000)
		dat.style.outline = "solid red";
		warnev.style.display = "inline-block";
	} else {
		dat.style.outline = "none black";
		warnev.style.display = "none";
	}
}

function vxo(){
	for(let el of window.location.hash.split(";"))
	{
		let al = el.split('=');
		if(al[0] == '#login')
			vxodb = al[1] == logv.value;
		if(al[0] == 'pas')
			vxodb &= al[1] == pasv.value;
	}
	if(vxodb)
	{
		warnew.style.display = 'none';
		console.log('vxod');
		window.location.href = 'home.html' + window.location.hash;
	}
	else
		warnew.style.display = 'inline';
}

function rego(){
	if(regb && pasr.value && logr.value){
		let ch = ch1.checked ? 1 : ch2.checked ? 2 : 3;
		window.location.hash = `login=${logr.value};pas=${pasr.value};ch=${ch}`;
		onvxod();
	}
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

function checkCaps(event) {
    var caps = event.getModifierState && event.getModifierState('CapsLock');
	if (caps){
		warnc.style.display = "inline";
		warncr.style.display = "inline";
	}else{
		warnc.style.display = "none";
		warncr.style.display = "none";
	}
}

function onreg(){
	vxod.style.transform = "rotateX(90deg)";
	vxod.addEventListener('transitionend', chvxod);
}

function onvxod(){
	reg.style.transform = "rotateX(90deg)";
	reg.addEventListener('transitionend', chreg);
}

function chvxod(){
	vxod.style.position = "absolute";
	reg.style.transform = "rotateX(0deg)";
	reg.style.position = "relative";
	r.style.display = "none";
	v.style.display = "inline";
	vxod.removeEventListener('transitionend', chvxod);
}

function chreg(){
	reg.style.position = "absolute";
	vxod.style.transform = "rotateX(0deg)";
	vxod.style.position = "relative";
	r.style.display = "inline";
	v.style.display = "none";
	reg.removeEventListener('transitionend', chreg);
}