let button =document.querySelector('button');
let gameover=document.getElementById('gameover')

function myFunction(){
	gameover.style.display="none";
	score=0;
	document.getElementById('change').innerHTML=score;
	bin=0;
	changeText();
	for(let i=0;i<3;i++){
		a.push(new Asteroids());
	}
}