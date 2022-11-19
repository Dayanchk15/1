var a = document.querySelector(".b_menu");
a.addEventListener('click', clicked);
function clicked() {
	document.getElementById('b_links').classList.toggle('active');
}