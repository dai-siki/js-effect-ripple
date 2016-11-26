# js-effect-ripple

Material Design Ripple effect in pure JS & CSS

## Demo

[click me](http://dai-siki.github.io/js-effect-ripple/example/demo.html).


## Evn
webpack + babel + scss


## Install

#### npm

```shell
$ npm install js-effect-ripple
```


## Usage

```html

<style>
	* {
		margin: 0;
		padding: 0;
		-webkit-appearance:none;
	}

	body {
		padding: 50px;
	}

	div {
		position: relative;
	}

	button {
		position: relative;
		display: block;
		width: 200px;
		height: 50px;
		line-height: 50px;
		margin-bottom: 20px;
		border: none;
		outline: none;
		border-radius: 2px;
		overflow: hidden;
		background-color: #f55;
		color: #fff;
		font-size: 20px;
		cursor: pointer;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.15);
		user-select: none;
		-webkit-tap-highlight-color: transparent;/*此处为了解决谷歌手机浏览器触摸后按钮带有一层阴影的碍事效果*/
		transform: rotate(0deg); /*此处为了解决谷歌浏览器子元素使用transform元素，父元素圆角溢出无效的bug。无奈火狐依然存在*/
	}

	button:hover {
		box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
	}

	button:active {
		box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.23);
	}

	#btn2 {
		background-color: #fff;
		color: #666;
	}

	#btn3 {
		width: 30px;
		height: 30px;
		line-height: 30px;
		font-size: 18px;
		border-radius: 50%;
		background-color: #fff;
		color: #666;
		overflow: visible;
	}

	#btn4 {
		width: 56px;
		height: 56px;
		line-height: 56px;
		border-radius: 50%;
		background-color: #086;
		font-size: 24px;
		color: #fff;
	}
</style>

<div>
	<button id="btn1" type="button" name="button">submit</button>
	<button id="btn2" type="button" name="button">submit</button>
	<button id="btn3" type="button" name="button">+</button>
	<button id="btn4" type="button" name="button">+</button>
</div>

<script>
	import effectRipple from 'js-effect-ripple';

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
</script>

```
