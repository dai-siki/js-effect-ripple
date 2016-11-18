# js-effect-ripple

Material Design Ripple effect in pure JS & CSS.

## Demo

[click me](http://dai-siki.github.io/js-effect-ripple/example/demo.html).


## Screenshot

![screenshot](screenshot.gif)


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
	#ripple_btn{
		position: relative;
		display: block;
		width: 200px;
		height: 50px;
		border: none;
		outline: none;
		border-radius: 6px;
		overflow: hidden;
		background-color: #f55;
		color: #fff;
		font-size: 20px;
		cursor: pointer;
	}
</style>

<div>
	<button id="ripple_btn" type="button" name="button">submit</button>
</div>

<script>
	import effectRipple from 'js-effect-ripple';

	let ripple_btn = document.getElementById('ripple_btn');

	ripple_btn.addEventListener('click', function (e) {
		effectRipple(e);
	});
</script>

```
