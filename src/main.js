var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new  Phaser.Game(config);

function preload (){
    this.load.image('bun', '../assets/bun.png');
}

function create (){
    this.add.image(650, 450, 'bun');

    var camera = this.cameras.add(0, 0, 800, 600);
    camera.setBackgroundColor('rgba(194, 115, 6, 1)');

}