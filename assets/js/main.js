var button = document.getElementsByClassName('hero-list-tab'),
	 tabContent = document.getElementsByClassName('hero-list-content');
button[0].classList.add('active');
tabContent[0].classList.add('active');


function heroType(e, heroType) {
	var i;
	for (i = 0; i < button.length; i++) {
		tabContent[i].classList.remove('active')
		button[i].classList.remove('active');
	}
	document.getElementById(heroType).classList.add('active');
	e.currentTarget.classList.add('active');
}
