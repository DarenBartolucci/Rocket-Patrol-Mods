

class Menu extends Phaser.Scene {
    constructor(){
        super('MenuScene');
    }
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/Blip_Select.wav');
        this.load.audio('sfx_explosion', './assets/Explosion.wav');
        this.load.audio('sfx_rocket', './assets/Fire.wav');
        this.load.image('Menu_tank', './assets/New_sprite_2.png');
    }      
    create(){
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#000000',
            color: '#39FF14',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
        // this.add.text(20,20,"Rocket Patrol Menu");
        //this.scene.start("playScene");
        this.add.text(game.config.width/2, game.config.height/2 -borderUISize - borderPadding - 100, 'REVENGE', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '22px';
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding- 50, 'of', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '28px';
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'BATTLEZONE', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '18px';
        this.add.text(game.config.width/2, game.config.height/2 + 50, 'Use <--> arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 100, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.add.tileSprite(320, 240, 64, 32, 'Menu_tank');

    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // easy mode
          game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // hard mode
          game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
          }
          this.sound.play('sfx_select');
          this.scene.start('playScene');    
        }
    }
      
}