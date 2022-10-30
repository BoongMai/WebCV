const mainPage = document.getElementById('main')

console.log(mainPage);

const chk = document.getElementById('chk');
const labelDark = document.querySelector('.label')


chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
	console.log(labelDark);
	labelDark.classList.toggle('lable__dark-mode')
});
