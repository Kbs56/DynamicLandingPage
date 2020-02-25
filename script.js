const time = document.getElementById('time'),
	greeting = document.getElementById('greeting'),
	name = document.getElementById('name'),
	focus = document.getElementById('focus');

const showAmPm = true;

function showTime() {
	let today = new Date(),
		hour = today.getHours(),
		min = today.getMinutes(),
		sec = today.getSeconds();

	const amPm = hour >= 12 ? 'PM' : 'AM';

	hour = hour % 12 || 12;

	time.innerHTML = `${hour}<span>:</span>${addZero(min)} ${
		showAmPm ? amPm : ''
	}`;

	setTimeout(showTime, 1000);
}

function addZero(n) {
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
	let today = new Date(),
		hour = today.getHours();

	if (hour < 12) {
		greeting.textContent = 'Good Morning';
		document.body.style.backgroundImage = "url('morning.jpg')";
	} else if (hour < 18) {
		greeting.textContent = 'Good Afternoon';
		document.body.style.backgroundImage = "url('afternoon.jpg')";
		document.body.style.paddingBottom = '320px';
	} else {
		greeting.textContent = 'Good Evening';
		document.body.style.backgroundImage = "url('night1.jpg')";
		document.body.style.color = 'white';
	}
}

function getName() {
	if (localStorage.getItem('name') === null) {
		name.textContent = ' [Enter Name]';
	} else {
		name.textContent = localStorage.getItem('name');
	}
}

function setName(e) {
	if (e.type === 'keypress') {
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('name', e.target.innerText);
			name.blur();
		}
	} else {
		localStorage.setItem('name', e.target.innerText);
	}
}

function getFocus() {
	if (localStorage.getItem('focus') === null) {
		focus.textContent = '[Enter Focus]';
	} else {
		focus.textContent = localStorage.getItem('focus');
	}
}

function setFocus(e) {
	if (e.type === 'keypress') {
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('focus', e.target.innerText);
			focus.blur();
		}
	} else {
		localStorage.setItem('focus', e.target.innerText);
	}
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
setBgGreet();
getName();
getFocus();
