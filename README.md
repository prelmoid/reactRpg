# RPG Game with React and HTML5

## Features:
    Maps (Required: Move around, find Treasures, Monsters)
    Fight (Required: Eliminate Monsters, Attack)
    Leveling (Required: Experience gain with kills)
    Inventory (Optional: Loot Treasure Chest, Equip diffrent items)
    Dialog (Optional: NPC's with 'dialog options')
    Shop (Optional: Buy / Sell Inventory items)
    GameMenu (Optional: Start new Game, Save / Load Game, Credits, Options (Sound on / off))[Gamestarts directly, without Save/Load/New]

## Project Status
This project is currently in development. At the moment, only the movement of the player is functioning. Other functionalities like monsters, experience are in progress.
## Installation and Setup Instructions

Clone down this repository. You will need `npm` installed globally on your machine.  

Installation:
`npm install`  

To Run Test Suite:  
`npm run test`  

To Start Server:
`npm start`  

To Visit App After Start:
`localhost:3000` 

## Folder Structure:
    src        components
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
        img - for all the used images
        for public stuff, like manifest.json for icons of the program if saved etc.


## Reflection

  - The main goal of this project is to learn some basic react concepts, so it's for learning experience only.
  - To find motivation, to learn those concept, I decided to do a dungeon rpg mini game, because those are my favorite games.
  - At some points in the progress, I ended up with some obstacles I created during my learning experience and understanding of the concepts in react.
  - Some Unittests are missing, because I used setState within my components. Those changes within a method are not instant, so I only can test them with long timeouts. Another problem, is the mounting of components in tests, so that setState actually works. Still working on that :/
