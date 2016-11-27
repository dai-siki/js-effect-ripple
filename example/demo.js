import effectRipple from '../src/ripple';

let btn1 = document.getElementById('btn1'),
	btn2 = document.getElementById('btn2'),
	btn3 = document.getElementById('btn3'),
	btn4 = document.getElementById('btn4'),
	btn5 = document.getElementById('btn5');

btn1.addEventListener('click', function (e) {
	effectRipple(e);
});

btn2.addEventListener('click', function (e) {
	effectRipple(e, {bgc: '#800'});
});

btn3.addEventListener('click', function (e) {
	effectRipple(e, {type: 'center', bgc: '#800'});
});

btn4.addEventListener('click', function (e) {
	effectRipple(e, {type: 'center', bgc: '#800'});
});

btn5.addEventListener('click', function (e) {
	effectRipple(e, {ele: btn1, type: 'center', bgc: '#008'});
	effectRipple(e, {ele: btn2, type: 'center', bgc: '#008'});
	effectRipple(e, {ele: btn3, type: 'center', bgc: '#008'});
	effectRipple(e, {ele: btn4, type: 'center', bgc: '#008'});
});
