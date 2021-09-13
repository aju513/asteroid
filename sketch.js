var s;
var a=[];
var l=[];
function setup() {
  createCanvas(1340, 640);
  s= new Ship();
  for(let i=0;i<7;i++){
    a.push(new Asteroids());
  }
}

function draw() {
  console.log(l.length);
  background(220);
  s.show();
  s.edges();
  s.ship_rotate();
  s.ship_move();

  for(let i=0;i<a.length;i++){
    a[i].show();
    a[i].asteroids_move();
    a[i].edges();

  }
  for(let i=0;i<l.length;i++){
    l[i].show();
    l[i].bullet_move();
    for(let j=0;j<a.length;j++){
      if(dist(a[j].pos.x,a[j].pos.y,l[i].pos.x,l[i].pos.y)<=a[j].r){
        a[j].r/=2;
         
        
      }
    }
  }
}

function keyPressed(){
  if(key==' '){
    l.push(new Laser(s.pos,s.angle));
  }
  if(keyCode == LEFT_ARROW){
    s.rotation_value=-0.1; 
  }
  if(keyCode == RIGHT_ARROW){
    s.rotation_value=0.1; 
  }
  if(keyCode == UP_ARROW){
    s.boost_x=3*sin(s.angle);
    s.boost_y=3*-cos(s.angle);

  }
  if(keyCode == DOWN_ARROW){
    s.boost_x=-3*sin(s.angle);
    s.boost_y=-3*-cos(s.angle);

  }

}
function keyReleased(){
  if(keyCode == LEFT_ARROW){
    s.rotation_value=0; 
  }
  if(keyCode == RIGHT_ARROW){
    s.rotation_value=0; 
  }
  if(keyCode == UP_ARROW){
    s.boost_x=0;
    s.boost_y=0;

  }
  if(keyCode == DOWN_ARROW){
    s.boost_x=-0;
    s.boost_y=0;

  }
  
}
