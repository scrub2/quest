// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`640008000901010102020202020201010101010102020202020201010101010102020202020202020202020202020202020202020202020202020202020202020406050505050505050505050505050505050505050505050505050505050505050505050505050509020202020202020201010101010101020202020201010101010101020202020202020202020101010101010202020202020202010101010101020204060505050808080807080808080808080707070707070707070505050505050505050505050505090202020202020201010101010101010202010101010103030101010202020202020202020201010101010101010101010201020101010101010202040605050808070707070805050505050508080808080808080808080808080808080807050505050902020302010101010101010301010102020101010103030303010102020202020302020202010101010301010101010102020101010103030102020406050508070508080508080505050507070808050505050805050505050507070505070505050509020303030303010101010101010101020201010101010301010101020202020202020202020101010101010101010101020202010101030301020204060505070707070707070808050507080807070707070707070707070707050505080808080805090203030303030301010101010101010202010101010101010101020202020202020202020201010101010101010101030202020101010101010102040605080707070807070707080808080707070707050505050505050505050808080705050505050902030303030303010101010101010103020101010101010101020202020202020202020202020101010101010101010102010202010101010102020406050505080707070808080807070707070505050707070707070708080807070505050505050509020203030303030101010101010101020201010101010202020202020202020202020202020302020101010101010202020202020202020202020104060505050505050707070505080808080808080808080808080808050505050505050505050505`, img`
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
....................................................................................................
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileGrass2,myTiles.tile4,sprites.dungeon.darkGroundCenter,myTiles.tile5,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundNorthWest1,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
