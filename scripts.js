var ol = $('ol');

function addMessage(message) {
	ol.append('<li>' + message + '</li>');
}

$('button[type]').on('click', function(e) {
	addMessage(e.target.textContent);
});

var input = $('input');

$('form').on('submit', function(e) {
	e.preventDefault();
	if (input.val()) {
		addMessage(input.val());
		input.val('');
	}
});

// var section = $('section');
// section.fadeOut().fadeIn().slideUp().slideDown();
