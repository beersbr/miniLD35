EnemyConfig = {}

EnemyConfig.enemy_types = ["normal", "speed", "circle", "double", "spawner", "diagnal", "jumper"];

EnemyConfig.callback = function(obj){
	switch(obj.type){
		case "normal":
			obj.x += obj.ax;
			break;

		case "speed": 
			obj.x += obj.ax * 4.5;
			break;

		case "circle": 
			obj.x += obj.ax * 3;
			break;

		case "double": 
			obj.x += obj.ax * 3;
			break;

		case "spawner": 
			obj.x += obj.ax * 3;
			break;

		case "diagnal": 
			obj.x += obj.ax * 3;
			break;

		case "jumper":
			obj.x += obj.ax * 3;
			break;
	}
}