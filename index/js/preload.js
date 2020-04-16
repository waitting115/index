window.onload = function () {
	let pics = ["./index/img/SideselMari2.jpg","./index/img/SideselMari3.jpg","./index/img/SideselMari4.jpg","./index/img/SideselMari5.jpg"];
	preload(pics);

	function preload(pics) {
		for(let item of pics) {
			let pic = new Image();
			pic.src = item;
		}
	}
}