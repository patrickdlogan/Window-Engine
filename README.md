# Window Engine

[![License: MIT](https://img.shields.io/github/license/GStaehler/Window-Engine.svg?color=brightgreen&label=License)](https://github.com/GStaehler/Window-Engine/blob/master/LICENSE)
[![Version](https://img.shields.io/github/release/GStaehler/Window-Engine.svg?color=Brightgreen&label=Version)](https://github.com/GStaehler/Window-Engine/releases)
[![Donate](https://img.shields.io/badge/Donate-PayPal-Brightgreen.svg)](https://www.paypal.me/GauthierStaehler)

![demo](https://github.com/GStaehler/Window_Engine/blob/master/demo.JPG)    

Welcome to **Window Engine**.  Window Engine is a lightweight javascript library, developed by Gauthier Staehler, for draggable and beautiful windows.
All windows have that structure :

```html
<div id="mydiv!" class="mydiv">
	<div id="mydiv!header" class="mydivheader color">
		<p class="windowTitle">Title</p>
		<b id="closeButton!">&times;</b>
	</div>
	<div class="mainWindow">Content</div>
</div>
```
*! is the number of the window*

*color is the color of the window : purple, orange, brown, cyan, crimson, green*

*if no color, the window is black*

### Add a new window

To add a new window, copy the structure above in your html and change ! (if this is your third window, ! = 3 for example)

You can add another button to open you new window :

```html
<span id="button!"></span>
```