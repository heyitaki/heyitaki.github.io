$('.nav-tabs a').click(function (e) {
	var hash = window.location.hash;
	hash && $('ul.nav a[href="' + hash + '"]').tab('show');
	$(this).tab('show');
	var scrollmem = $('body').scrollTop();
	window.location.hash = this.hash;
	$('html,body').scrollTop(scrollmem);
});

