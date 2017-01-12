import effectRipple from '../src/ripple';

let btn1 = document.getElementById('btn1'),
	btn2 = document.getElementById('btn2'),
	btn3 = document.getElementById('btn3'),
	btn4 = document.getElementById('btn4'),
	btn5 = document.getElementById('btn5');

btn1.addEventListener('touchstart', function (e) {
	effectRipple(e);
});

btn2.addEventListener('click', function (e) {
	effectRipple(e, {bgc: 'rgba(0, 100, 150, 0.3)'});
});

btn3.addEventListener('click', function (e) {
	effectRipple(e, {type: 'center'});
});

btn4.addEventListener('click', function (e) {
	effectRipple(e, {type: 'center', bgc: 'rgba(255, 255, 255, 0.4)'});
});

btn5.addEventListener('click', function (e) {
	effectRipple(e, {ele: btn1, type: 'center'});
	effectRipple(e, {ele: btn2, type: 'center'});
	effectRipple(e, {ele: btn3, type: 'center'});
	effectRipple(e, {ele: btn4, type: 'center', bgc: 'rgba(255, 255, 255, 0.3)'});
});
