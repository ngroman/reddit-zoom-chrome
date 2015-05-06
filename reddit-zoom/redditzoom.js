function zoomClick(e) {
	e.preventDefault();
	var next = this.parentNode.nextSibling;
	if (next) {
		var scrollTarget = this.parentNode.parentNode.getBoundingClientRect().bottom + document.body.scrollTop;
		scrollTo(document.body, scrollTarget - 30);
	}
}

function scrollTo(elem, pos) {
    var y = elem.scrollTop;
    y += (pos - y) * 0.3;
    if (Math.abs(y-pos) <= 6)
    {
        elem.scrollTop = pos;
        return;
    }
    elem.scrollTop = y;
    setTimeout(scrollTo, 40, elem, pos);   
}

function init() {
	var els = document.getElementsByClassName('child');
	for (var i = 0; i < els.length; ++i) {
		var el = els[i];
		if (!el.children.length) {
			continue;
		}
		el.innerHTML = "<div class='rzoom__wrap'><a href='#' title='Jump down' class='rzoom__button'>&darr;</a></div>"+el.innerHTML;
	}

	var buttons = document.getElementsByClassName('rzoom__button');
	for (i = 0; i < buttons.length; ++i) {
		buttons[i].addEventListener('click', zoomClick);
	}
}

init();

