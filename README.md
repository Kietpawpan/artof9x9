# artof9x9.js
A JavaScript library for creating 9 &times; 9 Go diagrams and comments.

## How to Use
1. Set game information
```
var c0= c('<div class="players">BS Go Seigen<br>WS Miyamoto Naoki</div><div class="place">Place: Japan<br>Date: 1986<br>Komi: 0<br>Result: B+4</div>');
```
2. Set comments for each moves. For example,
```
var c1=c('B1 is the best opening');
```
3. Include comment in the comment array, c0 is game info and c1 is the comment for move 1.
```
let comment = [cm, c0,c1,c2];
```
4. Set diagram. Each moves always has +b. The black board is set by = b, which is MGF.
```
var m0 = b;
var m1 = b1ee+b;
```
## Examples
1. [Go Seigen (9p) vs Miyamoto Naoki (8p)](https://kietpawpan.github.io/artof9x9/)
