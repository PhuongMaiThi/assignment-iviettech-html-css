// function change(){
// 	alert("You just click me to change content");
// 	document.getElementById('content').innerHTML = "Hello everyone! This is my javascript code!....";
// 	document.getElementById('content').style.color = "#D14424";
// 	document.getElementById('content').style.fontFamily = 'sans-serif';
// 	document.getElementById('content').style.fontSize = "30px";

// 	var id = setInterval(changecolor, 1000);
// 	var color1=1;

// 	function changecolor(){
		
// 		if(color1==1){			
// 			document.getElementById('content').style.color="red";
// 			document.getElementById('content').style.fontSize = "20px";
// 			color1=2;
// 		}
// 		else if(color1==2){
// 			document.getElementById('content').style.color="blue";
// 			document.getElementById('content').style.fontSize = "30px";
// 			color1=3;
// 		}
// 		else if(color1==3){
// 			document.getElementById('content').style.color="yellow";
// 			document.getElementById('content').style.fontSize = "40px";
// 			color1=4;
// 		}
// 		else{
// 			document.getElementById('content').style.color="green";
// 			document.getElementById('content').style.fontSize = "50px";
// 			color1=1;
// 		}
		
// 	}
// }

function changeslide(){
	var id=setInterval(slide, 2000);
	var image = 1;
	function slide(){
		if (image==1){
			document.getElementById('banner').style.backgroundImage = "url('images/slide-1.png')";
			image=2;
		}
		else{
			document.getElementById('banner').style.backgroundImage = "url('images/slide-2.png')";
			image = 1;
		}
	}
}

window.onload=function(){
	changeslide();
}
