let foot = document.getElementById("footer");
let fade = document.getElementById("fade");
foot.addEventListener("click", changePosition);

fade.classList.add("fade");		

function changePosition() {	
	if(foot.style.position == "static"){
		foot.style.position = "sticky";
		fade.classList.add("fade");

	}else{
		fade.classList.remove("fade");	
		foot.style.position = "static";
	}
}

