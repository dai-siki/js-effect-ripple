# js-effect-ripple

Material Design Ripple effect in pure JS & CSS.

## demo

[click me](http://dai-siki.github.io/js-effect-ripple/example/demo.html).


## screenshot

![screenshot](screenshot.gif)


## evn

模块使用es6编写（需babel转译），css使用scss编译（需scss-loader转译）。


## install

#### npm

```shell
$ npm install js-effect-ripple
```


## 使用

参考示例。

#### 示例

```html

<style>
	#ripple_btn{
		position: relative;
		overflow: hidden;
		background-color: #f00;
	}
</style>

<div>
	<button id="ripple_btn" type="button" name="button">let's go</button>
</div>

<script>
	import effectRipple from 'js-effect-ripple';

	let ripple_btn = document.getElementById('ripple_btn');

	ripple_btn.addEventListener('click', function (e) {
		effectRipple(e);
	});
</script>

```
