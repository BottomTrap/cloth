// vector pour decalrer le type vecteur et ses fonctions
var Vector  = function(x,y){
	this.x = x;
	this.y = y;
};

Vector.prototype = {
	
	add: function (B) {
		var nx, ny;
		if (typeof(B)=='number'){
			nx = this.x+B;
			ny = this.y+B;
		}else{
			nx = this.x+B.x;
			ny = this.y+B.y;
		}
		return new Vector(nx,ny);
	},
	add_: function(B) {
		if (typeof(B)=='number'){
			this.x+=B; this.y+=B;
		}else{
			this.x+=B.x; this.y+=B.y;
		}
		return this;
	},
	dot: function(B) {
		return ((this.x*B.x)+(this.y*B.y));
	},
	length: function() {
		return Math.sqrt((this.x*this.x)+(this.y*this.y));
	},
	multiply: function(B) {
		var nx, ny;
		if (typeof(B)=='number'){
			nx = this.x*B; ny = this.y*B;
		}else{ 
			nx = this.x*B.x; ny = this.y*B.y;
		}
		return new Vector(nx,ny);
	},
	multiply_: function(B) {
		if (typeof(B)=='number'){
			this.x*=B; this.y*=B;
		}else{
			this.x*=B.x; this.y*=B.y;
		}
		return this;
	},
	squaredLength: function(args) {
		return (this.x*this.x)+(this.y*this.y);
	},
	sum: function(){
		return this.x+this.y;
	},
	subtract: function(B) {
		var nx, ny;
		if (typeof(B) == 'number'){
			nx = this.x-B; ny = this.y-B;
		}else{
			nx = this.x-B.x; ny = this.y-B.y;
		}
		return new Vector(nx,ny);
	},
	subtract_: function(B) {
		if (typeof(B) == 'number'){
			this.x-=B; this.y-=B;
		}else{
			this.x-=B.x; this.y-=B.y;
		}
		return this;
	},
	toString: function() {
		return "["+this.x+","+this.y+"]";
	}

};
