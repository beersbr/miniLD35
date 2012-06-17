function bind(scope, fn){
	return function(){
		fn.apply(scope, arguments);
	};
}

function InputHandler(el){
	this.keys = {};
	this.mouseDown = {x: undefined, y: undefined};

	this.mouseClick = undefined;

	this.clicked = function(){
		var click = this.mouseClick;
		this.mouseClick = undefined;
		
		return click;
	}

	this.KeyIsDown = function(key){
		if(this.keys[key] == undefined) this.keys[key] = false;
		return this.keys[key];
	}

	this.CharIsDown = function(ch){
		var charCode = ch.toUpperCase().charCodeAt();
		return this.keys[charCode];
	}

	this.KeyUp = function(key){
		this.keys[key.keyCode] = false;
	}

	this.KeyDown = function(key){
		this.keys[key.keyCode] = true;	
	}

	this.MouseUp = function(event){
		// event.stopPropagation();
		// event.preventDefault();
		// console.log("mouseup");
	}

	this.MouseDown = function(event){
		event.stopPropagation();
		event.preventDefault();

		this.mouseDown.x = event.offsetX;
		this.mouseDown.y = event.offsetY;
		// console.log("mousedown");
	}

	this.MouseMove = function(e){
		// console.log("e");
	}

	this.MouseClick = function(e){
		e.stopPropagation();
		e.preventDefault();

		this.mouseClick = {};
		this.mouseClick.x = e.offsetX;
		this.mouseClick.y = e.offsetY;
	}

	// attach touch listeners
	el.addEventListener("touchstart", bind(this, this.MouseUp));
	el.addEventListener("touchend", bind(this, this.MouseDown));

	// Attach mouse listeners
	el.addEventListener("mouseup", bind(this, this.MouseUp));
	el.addEventListener("mousedown", bind(this, this.MouseDown));
	el.addEventListener("mousemove", bind(this, this.MouseMove));
	el.addEventListener("click", bind(this, this.MouseClick));

	// Attach keyboard listeners
	window.addEventListener("keyup", bind(this, this.KeyUp));
	window.addEventListener("keydown", bind(this, this.KeyDown));
}