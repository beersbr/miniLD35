Player = {}

// Player.bullet_count = 6;

// This will have to be somewhat dynamic for the many bullets that the other firing modes provide
Player.bullet_count_max = 3;
Player.bullet_fire_speed = 40;
Player.bullet_fire_lastshot = 0;

Player.score = 0.0;
Player.time_played = 0.0;
Player.shields = 100.0;
Player.wave = 1;
Player.enemies_left = 0;

Player.total_shots = 0;
Player.total_hits = 0;

Player.accuracy = function(){

	var ac = (Player.total_hits/Player.total_shots).toFixed(2);
	if(isNaN(ac)) return "0";
	return ac*100;
}

Player.max_wave_enemies = 10;
Player.enemy_spawn_rate = 0.05; // 1% to start off
Player.enemy_spawn_time = 120; // min frame between spawns
Player.enemy_last_spawn_time = 120;

Player.bullet_properties = {};
Player.gun_type = "single";

Player.gun_types = {
	single: function(args){

		width = args.w;
		height = args.h;
		hypotenuse = args.hyp;
		power = args.pow;

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2,
							ax: (width/hypotenuse)*power,
							ay: -((height)/hypotenuse)*power
						}));
	},

	double: function(args){
		width = args.w;
		height = args.h;
		hypotenuse = args.hyp;
		power = args.pow;

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2,
							ax: (width/hypotenuse)*power,
							ay: -((height-100)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2,
							ax: (width/hypotenuse)*power,
							ay: -((height+100)/hypotenuse)*power
						}));
	},

	triple: function(args){
		width = args.w;
		height = args.h;
		hypotenuse = args.hyp;
		power = args.pow;

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2,
							ax: (width/hypotenuse)*power,
							ay: -((height-100)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2,
							ax: (width/hypotenuse)*power,
							ay: -((height)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2,
							ax: (width/hypotenuse)*power,
							ay: -((height+100)/hypotenuse)*power
						}));
	},

	twin_single: function(args){
		width = args.w;
		height = args.h;
		hypotenuse = args.hyp;
		power = args.pow;

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2+10,
							ax: (width/hypotenuse)*power,
							ay: -((height)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2-10,
							ax: (width/hypotenuse)*power,
							ay: -((height)/hypotenuse)*power
						}));
	},

	twin_double: function(args){
		width = args.w;
		height = args.h;
		hypotenuse = args.hyp;
		power = args.pow;

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2+30,
							ax: (width/hypotenuse)*power,
							ay: -((height-100)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2+10,
							ax: (width/hypotenuse)*power,
							ay: -((height-100)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2-10,
							ax: (width/hypotenuse)*power,
							ay: -((height+100)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2-30,
							ax: (width/hypotenuse)*power,
							ay: -((height+100)/hypotenuse)*power
						}));
	},

	twin_triple: function(args){
		width = args.w;
		height = args.h;
		hypotenuse = args.hyp;
		power = args.pow;

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2+60,
							ax: (width/hypotenuse)*power,
							ay: -((height-100)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2+30,
							ax: (width/hypotenuse)*power,
							ay: -((height-100)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2+10,
							ax: (width/hypotenuse)*power,
							ay: -((height)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2-10,
							ax: (width/hypotenuse)*power,
							ay: -((height)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2-30,
							ax: (width/hypotenuse)*power,
							ay: -((height+100)/hypotenuse)*power
						}));

		balls.push(new Ball({x: 0,
							y: WINDOW_MAX_HEIGHT/2-60,
							ax: (width/hypotenuse)*power,
							ay: -((height+100)/hypotenuse)*power
						}));
	}
};

Player.shoot = function(args){
	Player.total_shots += 1;
	this.gun_types[this.gun_type](args);
}