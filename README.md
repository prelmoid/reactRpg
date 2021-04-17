# RPG Game with React and HTML5

## Features:
    Maps (Required: Move around, find Treasures, Monsters)
    Fight (Required: Eliminate Monsters, Attack)
    Leveling (Required: Experience gain with kills)
    Inventory (Required: Loot Treasure Chest, Equip diffrent items)
    Dialog (Optional: NPC's with 'dialog options')
    Shop (Optional: Buy / Sell Inventory items)
    GameMenu (Required: Start new Game, Save / Load Game, Credits, Options (Sound on / off))


## Folder Structure:
    src
        data
            items - icons and classes for all the items
            maps - tiles for dungeons, city... as well as initial map designs[position of tiles, monsters, ..]
            monsters - icons and classes for enemies

        components
            app-state - save/load game progress
            dialog-manager - handle dialogs 
            game-menus - game menus (save, load, new game, options[sound on/off], inventory)
            inventory - equip/drop item, sell item, buy item
            monsters - handle monster actions..
            player - handle player actions
            stats - handle levels and experience
            world - reset game state, start new game, load game

        tests - for unit tests etc.
            unit - unit tests
        utils - if needed
    docs
        documents related to the game, such as roadmap or contributors etc.

    public
        for public stuff, like manifest.json for icons of the program if saved etc.

### `highlighting` testline

