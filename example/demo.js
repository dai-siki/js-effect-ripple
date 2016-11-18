import effectRipple from '../src/ripple';

let ripple_btn = document.getElementById('ripple_btn');

ripple_btn.addEventListener('click', function (e) {
	effectRipple(e);
});
