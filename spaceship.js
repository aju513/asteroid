class Ship{
	constructor(){
		this.r = 20;
		this.angle =0;
		this.rotation_value=0;
		this.pos=createVector(width/2,height/2);
		this.boost_x=0;
		this.boost_y=0;
	}
	ship_rotate(){
		this.angle+=this.rotation_value;
	}
	ship_move(){
		this.pos.x+=this.boost_x;
		this.pos.y+=this.boost_y;
		this.bullet_x=this.pos.x;
		this.bullet_y=this.pos.y;
	}
	hits(asteroids){
		var d=dist(floor(this.pos.x),floor(this.pos.y),floor(asteroids.pos.x),floor(asteroids.pos.y));
		var comparator=asteroids.r;

		if(d<asteroids.r){
			 
			return true;
		}
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
	show(){
		push();
		strokeWeight(3);
		noFill();
		translate(this.pos.x,this.pos.y);
		rotate(this.angle);
		triangle(-this.r,this.r,this.r,this.r,0,-this.r);
		pop();
	}
}