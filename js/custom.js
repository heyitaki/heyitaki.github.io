hljs.initHighlightingOnLoad();

$('.nav-tabs a').click(function (e) {
	var hash = window.location.hash;
	hash && $('ul.nav a[href="' + hash + '"]').tab('show');
	$(this).tab('show');
	var scrollmem = $('body').scrollTop();
	window.location.hash = this.hash;
	$('html,body').scrollTop(scrollmem);
});

[].forEach.call(document.querySelectorAll('code'), function($code) {
    var lines = $code.textContent.split('\n');

    if (lines[0] === '')
    {
        lines.shift()
    }

    var matches;
    var indentation = (matches = /^[\s\t]+/.exec(lines[0])) !== null ? matches[0] : null;
    if (!!indentation) {
        lines = lines.map(function(line) {
            line = line.replace(indentation, '')
            return line.replace(/\t/g, '    ')
        });

        $code.textContent = lines.join('\n').trim();
    }
});

