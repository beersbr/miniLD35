window.requestAnimFrame = (function(callback){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback){
        window.setTimeout(callback, 1000 / 60);
    };
})();

// accepts two object
// object{x, y, w, h}
function intersection(a, b){
	return (Math.abs(a.x - b.x) * 2 < (a.w + b.w)) && (Math.abs(a.y - b.y) * 2 < (a.h + b.h));
}

function random(min, max){
	return ((Math.random() * (max-min)) + min);
}