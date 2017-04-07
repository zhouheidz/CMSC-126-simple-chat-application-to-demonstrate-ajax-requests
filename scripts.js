var ol = document.querySelector('ol');

function addMessage(message) {
	var li = document.createElement('li');
	li.textContent = message;
	ol.appendChild(li);
}

var buttons = document.querySelectorAll('button[type]');
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(e) {
		addMessage(e.target.textContent);
	});
}

var form = document.querySelector('form');
var input = document.querySelector('input');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	if (input.value) {
		addMessage(input.value);
		input.value = '';
	}
});
