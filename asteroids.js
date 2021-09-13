class Asteroids{
	constructor(){
		this.r=random(100,90);
		this.boost=random(floor(-2),floor(2));
		this.pos=createVector(random(0,1340),random(0,640));
	}
	asteroids_move(){
			this.pos.x+=this.boost;
			this.pos.y+=this.boost;
	}
	show(){

			stroke(0);
			noFill();
			push();
			ellipse(this.pos.x,this.pos.y,this.r);
			pop();
	}
	edges(){
		if(this.pos.x>width+ this.r){
			this.pos.x = -this.r;

		}
		else if(this.pos.x < -this.r){
			this.pos.x = width + this.r;
		}
		if(this.pos.y> height + this.r){
			this.pos.y = -this.r;
		}
		else if(this.pos.y < -this.r){
			this.pos.y = height + this.r;
		}
	}
}