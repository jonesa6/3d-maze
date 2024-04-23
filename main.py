@namespace
class SpriteKind:
    star = SpriteKind.create()
    star2 = SpriteKind.create()
    ultimate_star_rainbow = SpriteKind.create()
    star3 = SpriteKind.create()
    star4 = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    game.set_game_over_message(True,
        "Congrats you finished in " + ("" + str(game.runtime())) + " ms")
    game.game_over(True)
sprites.on_overlap(SpriteKind.player,
    SpriteKind.ultimate_star_rainbow,
    on_on_overlap)

def on_b_pressed():
    Render.set_attribute(Render.attribute.FOV, 0.9)
    
    def on_after():
        Render.set_attribute(Render.attribute.FOV, 0.8)
        
        def on_after2():
            Render.set_attribute(Render.attribute.FOV, 0.7)
            
            def on_after3():
                Render.set_attribute(Render.attribute.FOV, 0.6)
                
                def on_after4():
                    Render.set_attribute(Render.attribute.FOV, 0.5)
                    
                    def on_after5():
                        Render.set_attribute(Render.attribute.FOV, 0.4)
                        
                        def on_after6():
                            Render.set_attribute(Render.attribute.FOV, 0.3)
                            
                            def on_after7():
                                Render.set_attribute(Render.attribute.FOV, 0.2)
                                
                                def on_after8():
                                    Render.set_attribute(Render.attribute.FOV, 0.1)
                                timer.after(30, on_after8)
                                
                            timer.after(30, on_after7)
                            
                        timer.after(30, on_after6)
                        
                    timer.after(30, on_after5)
                    
                timer.after(30, on_after4)
                
            timer.after(30, on_after3)
            
        timer.after(30, on_after2)
        
    timer.after(30, on_after)
    
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    Render.move(mySprite, 100, -100)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_b_released():
    Render.set_attribute(Render.attribute.FOV, 0.2)
    
    def on_after9():
        Render.set_attribute(Render.attribute.FOV, 0.3)
        
        def on_after10():
            Render.set_attribute(Render.attribute.FOV, 0.4)
            
            def on_after11():
                Render.set_attribute(Render.attribute.FOV, 0.5)
                
                def on_after12():
                    Render.set_attribute(Render.attribute.FOV, 0.6)
                    
                    def on_after13():
                        Render.set_attribute(Render.attribute.FOV, 1)
                    timer.after(30, on_after13)
                    
                timer.after(30, on_after12)
                
            timer.after(30, on_after11)
            
        timer.after(30, on_after10)
        
    timer.after(30, on_after9)
    
controller.B.on_event(ControllerButtonEvent.RELEASED, on_b_released)

def on_on_overlap2(sprite4, otherSprite4):
    global mySprite3
    sprites.destroy(mySprite2)
    tiles.set_current_tilemap(tilemap("""
        level3
    """))
    mySprite3 = sprites.create(img("""
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
        """),
        SpriteKind.star2)
    tiles.place_on_tile(mySprite3, tiles.get_tile_location(32, 24))
sprites.on_overlap(SpriteKind.player, SpriteKind.star, on_on_overlap2)

def on_on_overlap3(sprite5, otherSprite5):
    global mySprite6
    sprites.destroy(mySprite5)
    mySprite6 = sprites.create(img("""
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
        """),
        SpriteKind.star4)
    tiles.set_current_tilemap(tilemap("""
        level19
    """))
    tiles.place_on_tile(mySprite6, tiles.get_tile_location(22, 26))
sprites.on_overlap(SpriteKind.player, SpriteKind.star3, on_on_overlap3)

def on_on_overlap4(sprite2, otherSprite2):
    global mySprite4
    sprites.destroy(mySprite6)
    tiles.set_current_tilemap(tilemap("""
        level18
    """))
    mySprite4 = sprites.create(img("""
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
        """),
        SpriteKind.ultimate_star_rainbow)
    tiles.place_on_tile(mySprite4, tiles.get_tile_location(51, 49))
sprites.on_overlap(SpriteKind.player, SpriteKind.star4, on_on_overlap4)

def on_on_overlap5(sprite3, otherSprite3):
    global mySprite5
    sprites.destroy(mySprite3)
    tiles.set_current_tilemap(tilemap("""
        level5
    """))
    mySprite5 = sprites.create(img("""
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
        """),
        SpriteKind.star3)
    tiles.place_on_tile(mySprite5, tiles.get_tile_location(49, 49))
sprites.on_overlap(SpriteKind.player, SpriteKind.star2, on_on_overlap5)

mySprite4: Sprite = None
mySprite6: Sprite = None
mySprite5: Sprite = None
mySprite3: Sprite = None
mySprite2: Sprite = None
mySprite: Sprite = None
Render.set_view_mode(ViewMode.TILEMAP_VIEW)
game.show_long_text("Welcome to 3D Mazes. Use WASD to move or arrows, press A to jump. B to zoom",
    DialogLayout.FULL)
if game.ask("Do you want a ", "tutorial"):
    game.show_long_text("The goal of each level is to collect a star. You will find arrows along the way that will guide you in the right direction. ",
        DialogLayout.BOTTOM)
Render.set_view_mode(ViewMode.RAYCASTING_VIEW)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
mySprite = Render.get_render_sprite_variable()
tiles.set_current_tilemap(tilemap("""
    level2
"""))
Render.move_with_controller(3, 2, 1)
Render.set_attribute(Render.attribute.FOV, 10)
Render.set_attribute(Render.attribute.DIR_X, 10)
Render.set_attribute(Render.attribute.DIR_Y, 10)
Render.set_attribute(Render.attribute.WALL_ZSCALE, 1.6)
Render.set_view_angle_in_degree(0)
Render.set_sprite_attribute(mySprite, RCSpriteAttribute.ZOFFSET, randint(0, 7))
mySprite2 = sprites.create(img("""
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
    """),
    SpriteKind.star)
tiles.place_on_tile(mySprite2, tiles.get_tile_location(60, 3))

def on_update_interval():
    if characterAnimations.matches_rule(mySprite, characterAnimations.rule(Predicate.MOVING)):
        animation.run_image_animation(mySprite,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            500,
            False)
game.on_update_interval(500, on_update_interval)
