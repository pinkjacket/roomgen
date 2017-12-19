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
