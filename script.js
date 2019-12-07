let foot = document.getElementById("footer");
let details = document.getElementById("details");
let fade = document.getElementById("fade");
// let section = document.qu
foot.addEventListener("click", changePosition);

fade.classList.add("fade");		

function changePosition() {	
	if(foot.style.position == "static" && details.hasAttribute('open')){
		foot.style.position = "fixed";
		details.removeAttribute('open');
		fade.classList.add("fade");
	}else{
		fade.classList.remove("fade");	
		foot.style.position = "static";
		details.setAttribute('open', true);

	}
};

// onclick="event.stopPropagation()"