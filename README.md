FMC Simple Modal
================

Installation
============

* Clone the git repo - `git clone https://github.com/fernando-dev/fmc-simple-modal.git` - or [download it](https://github.com/fernando-dev/fmc-simple-modal/archive/master.zip)
* includes `fmc-modal.js` between `<head>` and `</head>` 


Usage
=====

+ *include layer script*

```
jQuery(document).ready(function($) {
	$('.modal-click').fmcmodal();
});
```

+ *Add HTML to Link to click*

```
<a href="#!modal_abrir" class="modal-click">Open Modal</a>
```

+ *Add HTML to Modal content*

```
<div id="modal_abrir" class="fmcmodal">
    <a href="#!" class="modal-close" title="Fechar FMC Modal">×</a>
    <div class="modal-inner">
	<header class="modal-header"> Modal Header </header>
	<div class="modal-content"> Modal Content </div>
	<footer class="modal-footer"> Modal Footer </footer>
    </div>
</div>
```

+ Done! Enjoy! :P

Options
=======

+ `close` - class attribute of the modal


Contributors
============
 * [Fernando Moreira](https://fernandomoreiraweb.com/) - Creator and Maintainer
 * [You!)](https://github.com/) - Your Name Here. simply contribute to the project ;)



Contact
=======

If you have any questions or find any bugs, let me know.
