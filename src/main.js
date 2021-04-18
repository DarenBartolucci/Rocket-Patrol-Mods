
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height/15;
let borderPadding = borderUISize/3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
//By Daren Bartolucci
//Rocket Patrol Mod: REVENGE OF BATTLEZONE
//Completion: ~11 hours
//New, fourth enemy that is faster and worth more points (20)
//Adds time bonus for enemies hit (20)
//Complete overhall of art, sfx, and menus to create non-scifi theme (60)
//This mod rethemes the game after the Atari arcade game Battlezone
//Original spritework and neon-green theme is to recreate the graphics of original game
//If it is found that not enough has been done for the 60 point modification, then;
//New sprite work for everything (20)
//Change in art and behavior for weapon (faster) (20)
//Changed titlescreen with new art (10)

