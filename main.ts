namespace SpriteKind {
    export const star = SpriteKind.create()
    export const star2 = SpriteKind.create()
    export const ultimate_star_rainbow = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.ultimate_star_rainbow, function (sprite, otherSprite) {
    carnival.onGameOverExpanded(carnival.WinTypes.Timed)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Render.move(mySprite, 100, -100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.star2, function (sprite, otherSprite) {
    sprites.destroy(mySprite3)
    tiles.setCurrentTilemap(tilemap`level5`)
    mySprite4 = sprites.create(img`
        ................................
        ................................
        ................4...............
        ...............444..............
        ..............44444.............
        .............2444444............
        ............22444445............
        ............224444555...........
        ...........22444445555..........
        ..........2244444555557.........
        .........22244445555557.........
        ........2224444455555777........
        ......2222444445555577777.......
        ..2222222244445555577777999999..
        ...22222244444555577779999999...
        ....222224444555577779999999....
        ......22444455557777999999......
        .......244445557777999999.......
        ........4445555777799999........
        ..........555577777999..........
        ...........5577779999...........
        ...........5577779999...........
        ...........7777799999...........
        ..........77777..999aa..........
        ..........7777....9aaa..........
        .........7777......aaaa.........
        .........77.........aaa.........
        ........77...........aaa........
        ........7.............aa........
        .......7...............aa.......
        ................................
        ................................
        `, SpriteKind.ultimate_star_rainbow)
    mySprite4.setPosition(16, 6)
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
    mySprite3.setPosition(19, 0)
})
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
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
Render.moveWithController(1, 1, 1)
Render.setAttribute(Render.attribute.fov, 0.66)
Render.setAttribute(Render.attribute.dirX, 0.66)
Render.setAttribute(Render.attribute.dirY, 0.66)
Render.setAttribute(Render.attribute.wallZScale, 2.66)
Render.setViewAngleInDegree(1)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 . 5 5 5 5 . . . 
    . . . 5 5 5 . . . . . 5 5 . . . 
    . . . . 5 . . . . . . 5 5 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.star)
mySprite2.setPosition(12, 10)
carnival.startTimer()
carnival.showTimer(false)
