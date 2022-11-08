function myFunction(b){
	var x=document.getElementById('menu');
	if(x.style.display=="none"){
		x.style.display="flex";
	}else{
		x.style.display="none";
	}

	 b.classList.toggle("change");
}