# artof9x9.js
A JavaScript library to generate interactive 9 &times; 9 Go board diagrams and incorporate annotations.

## How to Use
1. Set game information
```
var c0= c('<div class="players">BS Go Seigen<br>WS Miyamoto Naoki</div><div class="place">Place: Japan<br>Date: 1986<br>Komi: 0<br>Result: B+4</div>');
```
2. Add comments to each move. For example,
```
var c1=c('B1 is the best opening, especially when the komi is greater than 7.');
```
3. Include comments in the comment array, c0 is game info and c1 is the comment for move 1.
```
let comment = [cm, c0,c1,c2];
```
4. Create a diagram for each move. Each move includes a positive 'b' value. The initial board state has a 'b' value, with non-initial boards set to Monteo Game Format (MGF).
```
var m0 = b;
var m1 = b1ee+b;
```
5. Append all moves to the move array.
```
let move =[mm, m0, m1, m2];
```
## Examples
1. [Go Seigen (9p) vs Miyamoto Naoki (8p)](https://kietpawpan.github.io/artof9x9/)
