function Square(w,h) {
	var res;
	this.getArea = function(w,h){
		res = w*h;
		return res;		
	}
}

function Circle(r) {
	Square.apply(this, arguments);
	var res;
	this.getArea = function(r) {
		res = 3.14 * r *r;
		return res;
	}

}

function Area() {
	this._figures  = [];
	this.addFigure = function(F) {
		this._figures.push(F);
		return this._figures;
	}
	this.clear = function() {
		this._figures = [];
		return this._figures;
	}
	Object.defineProperty(this, "size", {
		get: function(){
			return res;
		},
		set: function(value){ 
			var res = 0;
			area._figures.forEach(function(item, i, arr) {				
				
			})
		}
	})
	
}
