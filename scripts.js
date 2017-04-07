var ol = $('ol');

function addMessage(message) {
	ol.append('<li>' + message + '</li>');
}

function sendMessage(message) {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:3000/message');
	xhr.send(message);
}

function fetchMessages() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === xhr.DONE) {
			var messages = JSON.parse(xhr.responseText);
			ol.empty();
			messages.forEach(addMessage);
		}
	};
	xhr.open('GET', 'http://localhost:3000/message');
	xhr.send();
}

// "LONG POLLING"
setInterval(fetchMessages, 1);

$('button[type]').on('click', function(e) {
	addMessage(e.target.textContent);
	sendMessage(e.target.textContent);
});

var input = $('input');

$('form').on('submit', function(e) {
	e.preventDefault();
	if (input.val()) {
		addMessage(input.val());
		sendMessage(input.val());
		input.val('');
	}
});

// var section = $('section');
// section.fadeOut().fadeIn().slideUp().slideDown();



// AJAX STARTING HERE

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if (xhr.readyState === xhr.DONE) {
		// addMessage(xhr.responseText);
	}
};
xhr.open('GET', 'http://localhost:3000/');
xhr.send();
