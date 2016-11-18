/**
 * 按钮点击波纹效果
 */
import './ripple.scss';

export default function(e) {
	let target = e.target;
	if (e.type.toLowerCase() !== 'click') {
		return false;
	}
	let rect = target.getBoundingClientRect(),
		ripple = target.querySelector('.e-ripple');
	if (!ripple) {
		ripple = document.createElement('span');
		ripple.className = 'e-ripple';
		ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
		target.appendChild(ripple);
	}
	ripple.classList.remove('show');
	let top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop,
		left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
	ripple.style.top = top + 'px';
	ripple.style.left = left + 'px';
	ripple.classList.add('show');
	return false;
}
