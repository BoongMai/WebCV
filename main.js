const mainPage = document.getElementById('main')

const chk = document.getElementById('chk');
const labelDark = document.querySelector('.label')

const myHeader = document.getElementById('myHeader')
const sticky = myHeader.offsetTop

console.log("sticky: " ,sticky);
console.log("window.pageYOffset: " ,window.pageYOffset);


console.log('myHeader: ', myHeader);
chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
	labelDark.classList.toggle('lable__dark-mode')
});

// Header
window.addEventListener('scroll', () => {
	if (window.pageYOffset > sticky) {
		myHeader.classList.add("sticky");
	  } else {
		myHeader.classList.remove("sticky");
	  }
})


// Canvas 
