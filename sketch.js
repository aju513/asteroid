var s;
var a=[];
var l=[];
var bin=0;
let score=0;
var bin=0;
function setup() {
  createCanvas(1340, 640);
  s= new Ship();
  for(let i=0;i<3;i++){
    a.push(new Asteroids());
  }
}
function draw() {

  background(220);
  //spaceship
  for(var i=0;i<a.length;i++){
    if(s.hits(a[i])){
     
      gameover.style.display="block";
      a.length=0;
      bin=1;
      

     
    }
  }
  s.show();
  s.edges();
  s.ship_rotate();
  s.ship_move();
  //asteroids
  if(a.length==0 && bin==0){
    
    for(let i=0;i<score/8;i++){
      a.push(new Asteroids());
    }
  }
  for(let i=0;i<a.length;i++){

    a[i].show();
    a[i].asteroids_move();
    a[i].edges();
  }
  //bullets
  for(let i=l.length-1;i>=0;i--){
    l[i].show();
    l[i].bullet_move();
    for(let j=a.length-1;j>=0;j--){
      if(l[i].bullet_collide(a[j])){
        if(a[j].r>20){
          var newA=a[j].breakup();
          a = a.concat(newA);
        }
        score++;
        changeText();
        
        
      
      
        a.splice(j,1);
        l.splice(i,1);
        break;
      };
      
    }
  }
 
}

function changeText(){
  document.getElementById("text").innerHTML=score;
  document.getElementById('change').innerHTML=score;
}

//buttons
function mouseClicked(){
  l.push(new Laser(s.pos,s.angle));
}
function keyPressed(){
  if(key==' '){
    
  }
  if(keyCode == LEFT_ARROW || key == "a"){
    s.rotation_value=-0.050; 
  }
  if(keyCode == RIGHT_ARROW || key == "d"){
    s.rotation_value=0.050; 
  }
  if(keyCode == UP_ARROW || key == "w"){
    s.boost_x=3*sin(s.angle);
    s.boost_y=3*-cos(s.angle);
  }
  if(keyCode == DOWN_ARROW || key == "s"){
    s.boost_x=-3*sin(s.angle);
    s.boost_y=-3*-cos(s.angle);
  }
}
function keyReleased(){
  if(keyCode == LEFT_ARROW || key =="a"){
    s.rotation_value=0; 
  }
  if(keyCode == RIGHT_ARROW || key=="d"){
    s.rotation_value=0; 
  }
  if(keyCode == UP_ARROW || key=="w"){
    s.boost_x=0;
    s.boost_y=0;
  }
  if(keyCode == DOWN_ARROW || key=="s"){
    s.boost_x=-0;
    s.boost_y=0;
  }
}
