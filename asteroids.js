class Asteroids{
	constructor(pos,r){
		if(pos){
			this.pos=pos.copy();
		}
		else{
			this.pos=createVector(random(0,1340),random(0,640));
		}
		if(r){
			
		this.r=r;
		}
		else{
			this.r=60;
		}
		this.boost_x=random(-1,1);
		this.boost_y=random(-1,1);
	}
	asteroids_move(){
			this.pos.x+=this.boost_x;
			this.pos.y+=this.boost_y;
	}
	breakup(){
		var newA=[];
		newA[0]=(new Asteroids(this.pos,this.r*0.5));
		newA[1]=(new Asteroids(this.pos,this.r*0.5));
		return newA;

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