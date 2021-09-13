class Laser{
	constructor(pos,angle){
		this.pos = createVector(pos.x,pos.y);
		this.vel = createVector(5*(sin(angle)),-5*cos(angle));
	}
	bullet_move(){
		this.pos.x+=this.vel.x;
		this.pos.y+=this.vel.y;

	}
	show(){
		stroke(0,0,0);
		fill(0);
		ellipse(this.pos.x,this.pos.y,10);
	}
}