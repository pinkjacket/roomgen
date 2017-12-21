# [Fantasy Tabletop Game Room Generator](https://pinkjacket.github.io/roomgen/)


#### _This program will generate a random room and fill it with furniture, that is filled with other objects, 12-20-2017_

#### Authors: _**Adam Calhoun, Anduin Mooney, James Donlan, Ryan Ferris, Sam Gespass**_

## DESCRIPTION

_This program will randomly generate a room based in a fantasy setting, used for tabletop games such as D&D, pathfinder, and more. The generator will generate a room with a random size, and fills the room with as much furniture it can reasonably hold. After the furniture is generated, the furniture is populated with smaller items, which are also generated._


## SPECIFICATIONS

| Behavior | Input | Output |
| :------------- | :------------- | :------------- |
| generate random number | roll | 4 |
| generate a random member of a list | pizza, apple, cheese, onion, jam | cheese |
| multiply two random numbers, represents space | 3, 10 | 30 |
| generate another random number and compare to remaining space | space: 30, rand: 15 | space: 15 |
| randomly pick furniture, which takes up space | space: 30 table: 20 | remaining space: 10 |
| fill up space within furniture with random junk | table.top space: 15, cheese:2 | table.top: 13 |
| repeat the above until room something is rolled that wont fit | room:30, table: 12, fireplace: 5, lamp:2, bed:10, desk:5 | 1 space remaining, desk excluded |
| fill each piece of furniture with available space | table:10, cheese:2, tome:5, tome2:5 | table has a piece of cheese and a tome on top, second tome excluded. |

## SETUP/INSTALLATION REQUIREMENTS

* _Clone or download repository from github.com_
* _open index.html_
* _click generate_

_Don't move any files around or the program may not work!_

## KNOWN BUGS & ISSUES

_There are no known bugs at this time_


## TECHNOLOGIES USED

* _HTML_
* _JavaScript_
* _CSS_
* _Bootstrap_
* _JQuery_
* _Atom_

### LICENSE


Copyright (c) 2017 **_This software is licensed under the MIT license_**
