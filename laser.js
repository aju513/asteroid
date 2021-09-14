class Laser{
	constructor(pos,angle){
		this.pos = createVector(pos.x,pos.y);
		this.vel = createVector(20*(sin(angle)),-20*cos(angle));
		this.r=10;
	}
	bullet_move(){
		this.pos.x+=this.vel.x;
		this.pos.y+=this.vel.y;
	}
	bullet_collide(asteroid){
		var d=dist(asteroid.pos.x,asteroid.pos.y,this.pos.x-this.r,this.pos.y-this.r);
		if(d<asteroid.r){
			console.log(d,asteroid.r);
		return true;
		}
		else{
			return false;
		}
	}
	show(){
		stroke(0,0,0);
		fill(0);
		ellipse(this.pos.x,this.pos.y,this.r);
	}
}