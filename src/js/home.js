import * as CPU from './3d/models/CPU/module.js';
import * as MATH from './3d/models/matb/module.js';
import * as KULER from './3d/models/kuler/module.js';
import * as OZU from './3d/models/opera/module.js';
import * as GPU from './3d/models/video/module.js';
import * as PZU from './3d/models/disk/module.js';
import * as KORP from './3d/models/korp/module.js';
import * as BLOCK from './3d/models/block/module.js';
var hello, hellob, her, logimg, limg, eimg, poslogimg;
let dialogi = 0;
let kit = [CPU, MATH, KULER, OZU, GPU, PZU, KORP, BLOCK];
document.addEventListener("DOMContentLoaded",function(){
	hello = document.getElementById("hello");
	hellob = document.getElementById("hellob");
	her = document.getElementById("her");
	logimg = document.getElementById("logimg");
	poslogimg = document.getElementById("poslogimg");
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

window.chhello = function chhello(){
	hello.innerHTML = 'Давайте разберёмся с комплектующими вместе. Мы заботимся о своих покупателях. И поэтому не желаем чтобы вы обманулись.<br>';
	hellob.innerHTML = 'Вперёд!';
	hellob.setAttribute('onclick', 'start();');
	hello.appendChild(hellob);
}

window.start = function start(){
	hello.style.display = 'none';
	hellob.style.display = 'none';
	her.setAttribute('style', `display: inline-block;
	animation: hra 1s linear infinite`);
	setTimeout(function () {
		her.setAttribute('style', `display: inline-block;
		animation: void 0;
		width: 100vw;
		z-index: 1;`);
	}, 975);
	logimg.setAttribute('style', `animation: stlogimga 2s linear infinite`);
	setTimeout(function () {
		logimg.setAttribute('style', `animation: logimga 2s linear infinite`);
		//poslogimg.setAttribute('style', `animation: posl 2s linear infinite`);
		setTimeout(function () {
			logimg.setAttribute('style', `animation: void 0;
			font-size: 2vw;
			cursor: pointer;`);
			/*poslogimg.setAttribute('style', `animation: void 0;
			top: auto;
			left: auto;
			right: 5%;
			position:absolute;`);*/
		}, 1975);
		limg.setAttribute('style', `animation: limga 2s linear infinite`);
		setTimeout(function () {
			limg.setAttribute('style', `animation: void 0;
			width: 32px;
			height: 32px;`);
			init();
		}, 1975)
	}, 1975);
}

function init(){
	hello.innerHTML = 'Итак, вы решились на самостоятельную сборку домашнего компьютера из комплектующих. Поздравляем! Это не только интересно, но и более экономично, чем покупать готовую машину. Если с задачей подбора «железа» вы сталкиваетесь впервые, то вам обязательно помогут наши советы. Мы расскажем, из чего состоит компьютер, и дадим рекомендации по выбору процессора, дисков, памяти и всех остальных ключевых элементов вашего будущего ПК.<br>';
	hello.setAttribute('style', 'font-size: 2vw');
	hellob.setAttribute('style', 'margin-top: 10px');
	hellob.innerHTML = 'Начнём!';
	hellob.setAttribute('onclick', 'dialog();');
	hello.appendChild(hellob);
	hello.style.display = 'inline-block';
	hellob.style.display = 'inline-block';
}

window.dialog = function dialog(){
	let dialogs = [
	`Любой настольный компьютер – это конструктор. Довольно увлекательный и абсолютно доступный каждому. В том плане, что ничего страшного в самостоятельной сборке ПК из купленных в магазине комплектующих нет. Фактически вы просто берёте несколько компонентов и лишь соединяете их друг с другом.`
	,`Компонентов этих далеко не так много, как может изначально показаться. Самое главное – подобрать такой набор, чтобы всё совмещалось без проблем. Мы составили для вас список ключевых компонентов настольного компьютера в том порядке, в котором их лучше всего выбирать.`
	,`Процессор. «Мозг» вашего будущего ПК. Этот чип управляет всеми вычислительными процессами.`
	,`Материнская плата. Это плата, которая является связующим звеном между всеми элементами компьютера, именно к ней подключаются все остальные комплектующие.`
	,`Система охлаждения процессора. Может быть сделана в виде вентилятора (кулера) со стальным или медным радиатором или жидкостной системы охлаждения («водянка»).`
	,`Оперативная память. Это очень быстрая временная память компьютера, в которой хранится информация о выполняемых в конкретный момент задачах. Например, локация игры, которую вы проходите, или фотография, которую вы обрабатываете в «Фотошопе». Как только вы заканчиваете операцию или выключаете компьютер, оперативная память очищается.`
	,`Видеокарта. Устройство, отвечающее за преобразование битов и байтов информации в реальные визуальные образы, которые вы видите на мониторе. Чем лучше ваша видеокарта, тем лучше графика в играх и тем быстрее осуществляются все наиболее сложные процессы: 3D-моделирование и рендеринг, например.`
	,`Устройство хранения данных. Здесь компьютер хранит всю информацию: установленную систему, игры и даже недописанный курсач по экономике. Может быть выполнено в виде накопителя на жёстких магнитных дисках (HDD) или твердотельного накопителя (SSD). Если не вдаваться в детали, то первое медленнее и дешевле, а второе – быстрее и дороже.`
	,`Корпус. То, что постоянно на виду. Прекрасный (или не очень), вместительный (не всегда) «ящик», внутри которого вы расположите все выбранные комплектующие.`
	,`Блок питания. Узел, который получает энергию от общей электросети и питает все компоненты компьютера. Чем мощнее вы хотите собрать компьютер – тем больше внимания нужно уделить выбору блока питания.`
	,`Плюс есть пара дополнительных вещей. Если вы планируете разместить в корпусе сразу несколько HDD или SSD, то стоит убедиться, что вам хватит кабелей, с помощью которых они подключаются к материнской плате. Обычно один-два включают в комплект поставки корпуса. И ещё вам обязательно нужна будет термопаста – вязкая субстанция, которую вы аккуратно нанесёте на верхнюю часть процессора, прежде чем окончательно закрепить его на материнской плате специальной крышкой. Чаще всего достаточное её количество включено в комплект поставки кулера для процессора, но такая паста не всегда бывает качественной.`
	,`Вы ознакомленны с базовыми знаниями. Теперь вас будет намного сложнее обмануть! Удачи и хороших вам покупок.`];
	hello.innerHTML = dialogs[dialogi] + '<br>';
	hello.setAttribute('style', 'font-size: 2vw;');
	hellob.setAttribute('style', 'margin-top: 10px');
	hellob.innerHTML = 'Далее!';
	if(dialogi>1 && dialogi < 10)
	{
		hello.setAttribute('style', 'font-size: 2vw; z-index: 1; left: auto; margin-left: 10px; transform: translate(0%, -50%); width: 25vw;');
		kit[dialogi-2].init();
	}
	if(dialogi>2 && dialogi < 11)
		kit[dialogi-3].destroy();
	if(dialogi>9)
		hello.setAttribute('style', 'font-size: 2vw; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);');
	if(dialogi<11)
		hello.appendChild(hellob);
	hello.style.display = 'inline-block';
	hellob.style.display = 'inline-block';
	dialogi++;
}