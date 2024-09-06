# artof9x9.js
A JavaScript library to generate 9 &times; 9 Go board diagrams and incorporate annotations.

## How to Use
1. Specify game details.
```
var c0= c('<div class="players">BS Go Seigen<br>WS Miyamoto Naoki</div><div class="place">Place: Japan<br>Date: 1986<br>Komi: 0<br>Result: B+4</div>');
```
2. Add game information.
```
var cm = "This game is....";
```
3. Add comments to the comment variable, where c1 is the comment associated with move 1.
```
var c1=c('B1 is the best opening, especially when the komi is greater than 7.');
```
4. Append all comments to the comment array, c0 is game info and c1 is the comment for move 1.
```
let comment = [cm, c0,c1,c2];
```

5. Create a diagram for each move. Each move includes a positive 'b' value. The initial board state is represented using 'b' values, while subsequent moves are expressed in Monteo Go Format (MGF), which consists of MGF move codes plus a 'b' value." The five-star points are represented by p, followed by the move code (e.g. b1ee) and the blank board (b).


```
var m0 = p + b; // blank board with five star points.
var m1 = p + b1ee+b;
```
6. Append all moves to the move array.
```
let move =[mm, m0, m1, m2];
```
## Examples
1. [Go Seigen (9p) vs Miyamoto Naoki (8p)](https://kietpawpan.github.io/artof9x9/GoSeigen.html)

## Source
[The Art of 9 &times; 9 Go](https://kietpawpan.github.io/artof9x9/cover.html)
