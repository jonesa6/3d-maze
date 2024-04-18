namespace SpriteKind {
    export const star = SpriteKind.create()
    export const star2 = SpriteKind.create()
    export const ultimate_star_rainbow = SpriteKind.create()
    export const star3 = SpriteKind.create()
    export const star4 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ultimate_star_rainbow, function (sprite, otherSprite) {
    game.setGameOverMessage(true, "Congrats you finished in" + sec + "secs")
    game.gameOver(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.setAttribute(Render.attribute.fov, 0.5)
    timer.after(50, function () {
        Render.setAttribute(Render.attribute.fov, 0.1)
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.move(mySprite, 100, -100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.star4, function (sprite, otherSprite) {
    sprites.destroy(mySprite6)
    tiles.setCurrentTilemap(tilemap`level18`)
    mySprite4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 8 . . . . . . . 
        . . . . . . . 7 8 . . . . . . . 
        . . . . . . 6 7 8 9 . . . . . . 
        . . . . . 5 6 7 8 9 a . . . . . 
        . f 2 3 4 5 6 7 8 9 a b c d f . 
        . . 2 3 4 5 6 7 8 9 a b c d . . 
        . . . . 4 5 6 7 8 9 a b . . . . 
        . . . . . . 6 7 8 9 . . . . . . 
        . . . . . 5 6 7 8 9 a . . . . . 
        . . . . . 5 6 7 8 9 a . . . . . 
        . . . . 4 5 6 7 8 9 a b . . . . 
        . . . 3 4 5 6 . . 9 a b c . . . 
        . . . 3 4 . . . . . . b c . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.ultimate_star_rainbow)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(51, 49))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.star2, function (sprite, otherSprite) {
    sprites.destroy(mySprite3)
    tiles.setCurrentTilemap(tilemap`level5`)
    mySprite5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . . 9 9 . . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . 9 9 9 . . 9 9 9 . . . . 
        . . . 9 9 9 . . . . 9 9 9 . . . 
        . . . 9 9 . . . . . . 9 9 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.star3)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(49, 49))
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Render.setAttribute(Render.attribute.fov, 1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.star, function (sprite, otherSprite) {
    sprites.destroy(mySprite2)
    tiles.setCurrentTilemap(tilemap`level3`)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 . . 2 2 2 . . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . . 2 2 . . . . . . 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.star2)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(32, 24))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.star3, function (sprite, otherSprite) {
    sprites.destroy(mySprite5)
    mySprite6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . . 7 7 . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 . . 7 7 7 . . . . 
        . . . 7 7 7 . . . . 7 7 7 . . . 
        . . . 7 7 . . . . . . 7 7 . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.star4)
    tiles.setCurrentTilemap(tilemap`level19`)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(22, 26))
})
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let mySprite6: Sprite = null
let sec = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.showLongText("Welcome to 3D Mazes. Use WASD to move or arrows, press A to jump. B to zoom", DialogLayout.Full)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite = Render.getRenderSpriteVariable()
tiles.setCurrentTilemap(tilemap`level2`)
Render.moveWithController(3, 2, 1)
Render.setAttribute(Render.attribute.fov, 1)
Render.setAttribute(Render.attribute.dirX, 0.066)
Render.setAttribute(Render.attribute.dirY, 0.066)
Render.setAttribute(Render.attribute.wallZScale, 1.6)
Render.setViewAngleInDegree(0)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 . . 5 5 5 . . . . 
    . . . 5 5 5 . . . . 5 5 5 . . . 
    . . . 5 5 . . . . . . 5 5 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.star)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(60, 3))
sec = 0
let seconds_calculating = 0
game.onUpdate(function () {
    seconds_calculating = game.runtime() - sec * 1000
    if (seconds_calculating == 1000) {
        sec += 1
        seconds_calculating = 0
    }
})
game.onUpdateInterval(500, function () {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.Moving))) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        500,
        false
        )
    }
})
