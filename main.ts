controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    fish.setImage(fishLeftImg)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    fish.setImage(fishRightImg)
})
function makeEnemy () {
    evilBurger = sprites.create(enemys._pickRandom(), SpriteKind.Enemy)
    evilBurger.vx = 40
    evilBurger.vy = 60
    evilBurger.y = 0
    evilBurger.x = randint(0, 160)
    evilBurger.setFlag(SpriteFlag.BounceOnWall, true)
    evilBurger.ay = 70
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    let text_list: number[] = []
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate)
    scene.cameraShake(4, 500)
    sprite.say(text_list._pickRandom(), 2000)
})
let evilBurger: Sprite = null
let fish: Sprite = null
let fishRightImg: Image = null
let fishLeftImg: Image = null
let enemys: Image[] = []
let randomSayings = ["i got hit", "ouch", "no thanks"]
enemys = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    . . . . 7 7 7 7 7 7 . . . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    . . . . . 4 4 4 4 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e . . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . e e e e . . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . . e e 2 e e . . . . . . . 
    . . . . e e e e 2 e . . . . . . 
    . . . . e e e e e e . . . . . . 
    . . . e 2 e 2 e e e e . . . . . 
    . . . e e e e e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . 2 2 2 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
fishLeftImg = img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . . 9 9 9 . . . . . . . . 
    . . . . 9 9 9 9 . . . . . . . . 
    . . . 9 2 9 2 9 . . . . . . . . 
    . . . 9 9 9 9 9 . . . . . . . . 
    . . 9 2 2 2 9 9 . . . . . . . . 
    . . 9 9 9 9 9 9 . . . . . . . . 
    . . . . 9 9 9 9 . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
fishRightImg = fishLeftImg.clone()
fishRightImg.flipX()
fish = sprites.create(fishLeftImg, SpriteKind.Player)
fish.y = 110
controller.moveSprite(fish, 100, 0)
fish.setFlag(SpriteFlag.StayInScreen, true)
makeEnemy()
info.setLife(10)
game.onUpdateInterval(2000, function () {
    makeEnemy()
})
