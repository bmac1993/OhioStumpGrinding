
$(document).ready(function () {
	$('.carousel').carousel({
		interval:3000
	});

	$(document).on('click', '[data-toggle="lightbox"]', function (event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});
});