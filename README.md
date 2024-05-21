# JSKeyListener

## Overview
Listens for keypresses on a webpage, then processes them according to element properties.

This is a short library designed to be used as a framework for my (and your) HTML/JS projects.

## Features
- Fully customizable.
- Easy set-up (one line of code)
- Works even for elements that don't yet exist on the page

## Requirements 
HTML, JavaScript

## Usage:
Include the file `CttCJim_keyListener.js` and call the setup function at the start of your code:
```
$(document).ready(function() {
  CttCJim_setUpKeyListener();
}
```

In its raw form, the listener will wait for an "Enter" keyup, then look at the `data-enter` attribute on the element that was selected and click whatever matches that query. For instance, in the below example, pressing "Enter" while typeing in a Max Voltage input box will result in a simulated click on a button with ID `GSe_btn_set_all`, which is the "Save" button.
```
<input id = "GSe_maxVoltage"
  name="GSe_maxVoltage"
  data-enter="#GSe_btn_set_all"
>
```

##Customization
I've included comments in `CttCJim_keyListener.js` that show how to add listeners for other keys, or how to add more options to the existing Enter Key listener.

##Compatibility
This library makes use of `document.addEventListener( "keyup")` so if you add any other `keyup` listener at the document level it may break.
