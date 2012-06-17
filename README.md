## Space Shooter Castle Defence ##

This is my Ludum Dare Mini 35 Submission. It is a space shooter defence game. You defend your ship from the enemies. You don't get to move but
you can change your gun type and power on a wave per wave basis. You get points based on how long you live / your accuracy / your final health per wave etc.

#### Design ####

* Bullets have gravity towards the bottom half of the screen... for some reason.
* Enemies Should not reach the left side of the screen as that's where the castle/homebase lives.
* Protect the castle for as long as possible fighting off waves of different enemy types.

#### Ideas ####

* Show impact damage above collision

#### Bullet Ideas ####

* Double and triple shot
* Bouncing bullets 
* Mines
* Bullets lose velocity but are not destroyed on collision
* Bullets as walls

#### Enemy Type Ideas ####

* Spinning enemies
* Double and triple enemy groups
* Change speed of he enemies.
* Enemy size changes based on the amount of health it has.
* Show enemy health above enemy

#### TODO ####

* Create Items for player to upgrade the way the bullets come from the gun and the type of bullets.
* Create enemy types
* Create menu system for starting and stopping games
* Fix enemy spawn spaces and timings.
** Fix the time to spawn as a chance every so many frames
* Create images for enemies.
* Create collision animation.
* Fix the flashing when an enemy is removed.

#### Done ####

* Create collision between bullets and enemies
* Create a GUI for showing game stats