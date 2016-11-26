import './ripple.scss';

/**
 * 按钮点击波纹效果
 *
 * [type] hit点击位置扩散　center中心点扩展
 */
export default function(e, type, bgc) {
	let target = e.target;
	if (e.type.toLowerCase() == 'click' || e.type.toLowerCase() == 'touch') {
		let rect = target.getBoundingClientRect(),
			ripple = target.querySelector('.e-ripple');
		if (!ripple) {
			ripple = document.createElement('span');
			ripple.className = 'e-ripple';
			ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
			target.appendChild(ripple);
		} else {
			ripple.className = 'e-ripple';
		}
		switch (type) {
			case 'center':
				ripple.style.top = (rect.width / 2 - ripple.offsetHeight / 2 ) + 'px';
				ripple.style.left = (rect.height / 2 - ripple.offsetWidth / 2) + 'px';
				break;
			default:
				ripple.style.top = (e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop) + 'px';
				ripple.style.left = (e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft) + 'px';
		}
		if (bgc) {
			ripple.style.backgroundColor = bgc;
		}
		ripple.className = 'e-ripple z-active';
		return false;
	}
}
