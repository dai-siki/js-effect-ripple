import effectRipple from '../src/ripple';

let btn1 = document.getElementById('btn1'),
	btn2 = document.getElementById('btn2'),
	btn3 = document.getElementById('btn3'),
	btn4 = document.getElementById('btn4');

btn1.addEventListener('click', function (e) {
	effectRipple(e);
});

btn2.addEventListener('click', function (e) {
	effectRipple(e,'','#f00');
});

btn3.addEventListener('click', function (e) {
	effectRipple(e,'center','#005');
});

btn4.addEventListener('click', function (e) {
	effectRipple(e,'center');
});
