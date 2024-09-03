/* 
Copyright (c) 2024 Monte Kietpawpan
All rights reserved.
*/

a {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-image:url(wood2.jpg);
  color:white;
}

a:hover {
  background-color: #ddd;
  color: black;
  background-image:url(wood1.jpg);

}

.previous {
  background-color: #f1f1f1;
  color: black;
}

.next {
  background-color: #04AA6D;
  color: white;
}

.round {
  border-radius: 50%;
}

.control{
margin-left:10px;
margin-top:50px;
}


.button {
  background-color: #c97d07;
  /*border: none;*/
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius:5%;
  background-image:url(wood1.jpg);
}

.btn{
  background-color: white;
  color: black;
  border: 2px solid;
  border-color:#c97d07;
}

.btn:hover {
  background-image:url(wood2.jpg); 
  color:white;
}

.copyright{
  font-size:16px;
  margin-top:-25px;
  margin-bottom:50px;
}

a{
text-decoration:none;
}


body{
  height: 100vh;
  
  background-position:
    top 0px left 10px,
    top 0px right 10px,
    bottom 0px right 350px,
    bottom 0px left 350px;
  
  background-size:contain; 
  background-repeat: no-repeat, repeat-x;
  
  background-image:
    url(wood1.jpg),
    url(wood2.jpg);
}

.commentBox{
  color:white;
  position:absolute;
  height:300px;
  font-size:20px;
  padding:10px 10px 10px 10px;
  background-color:white;
  width:250px;
  border:none;
  margin-left:-190px;
  margin-top:50px;
  color:black;
  font-family:'Helvetica Neue', Helvetica, Arial, Sans-Serif;

  /*font-family:'VT323';*/
}
textarea{
  font-size:20px;
  overflow:hidden;
  border-color:#c97d07;
  border-width:2px;
  padding:10px 10px 10px 10px;
  /*background-image:url(wood1.jpg);*/
}

textarea:focus, input:focus{
  outline: 0;
  background-image:url(#);
}

.grid-container {
  margin: 50px 0px 0px 50px;
  background-color: #111; /* color of the line between cells */
  display: grid;
  grid-gap: 4px; /* size of the line between cells */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; /*9 x 9 board size */
  grid-template-rows: minmax(min-content, max-content);
  padding:7px; /* size of the line around the board */
  width:450px; /*board width */
  height:450px; /*board height */
  position:relative;
}

p {
  margin: -470px 0px 0px 520px;
  font-size:25px;
  font-family:'Helvetica Neue', Helvetica, Arial, Sans-Serif;
  width:250px;
}

.grid-item {
  background-color: #ECAD4E; /*#FFD966; #f7dc6f; #eec134;*/
 min-height: 50px;
/*
  min-height: 50px; /* space between lines 
 background-image:url('wood1.jpg'); /*url('wood1.jpg') ; from https://www.stockvault.net/photo/124529/wood-background 
 background-repeat:none;*/
}

.w {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 9px;
    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 30px Arial, sans-serif;
    font-weight:bold;
}


.b {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 9px;
    background: black;
    border: 1px solid black;
    color: white;
    text-align: center;
    font: 30px Arial, sans-serif;
    font-weight:bold;
    /*background-image: radial-gradient(grey, black);*/
}

.c {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 9px;
    border: 0px 
    color: black;
    text-align: center;
    font: 30px Arial, sans-serif;
    font-weight:bold;
}

.p {
    border-radius: 50%;
    width: 7px;
    height: 7px;
    padding: 0px;
    background: black;
    border: 1px solid black;
    color: white;
    text-align: center;
    font: 14px Arial, sans-serif;
    font-weight:bold;
}

.label {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 9px;
    border: 0px;
    color: black;
    text-align: center;
    font: 30px Arial, sans-serif;
    font-weight:bold;
}


.x {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 9px;
    background: black;
    border: 1px solid black;
    color: red;
    text-align: center;
    font: 25px Arial, sans-serif;
    font-weight:bold;
    /*background-image: radial-gradient(grey, black);*/
}

.t {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 9px;
    background: black;
    border: 1px solid black;
    color: red;
    text-align: center;
    font: 25px Arial, sans-serif;
    font-weight:bold;
}

.s{
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 9px;
    background: black;
    border: 1px solid black;
    color: red;
    text-align: center;
    font: 30px Arial, sans-serif;
    font-weight:bold;
}

.xw {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 9px;
    background: white;
    border: 1px solid black;
    color: red;
    text-align: center;
    font: 25px Arial, sans-serif;
    font-weight:bold;
    /*background-image: radial-gradient(grey, black);*/
}

.tw {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 9px;
    background: white;
    border: 1px solid black;
    color: red;
    text-align: center;
    font: 25px Arial, sans-serif;
    font-weight:bold;
}

.sw{
    border-radius: 50%;
    width: 35px;
    height: 35px;
    padding: 9px;
    background: white;
    border: 1px solid black;
    color: red;
    text-align: center;
    font: 30px Arial, sans-serif;
    font-weight:bold;
}

table, th, td {
  border:none;
  vertical-align:top;
  text-align: left;
  color:black;
  font-size:18px;
  font-family:'Sofia';
  resize: both;
  padding-left:15px;
}

.lineA{
height:50px;
}

.text{
  background-color:white;
  /*background-image: url(wood1.jpg);*/
  background-size:contain; 
  font-family: "Inconsolata", "Handjet";
  padding-top:20px;
  width:500px;
  line-height:1.5;
  font-size:22px;
  zoom:190%;
}

.paper{
margin: 500px opx opx 50px;
}


.title{
  font-family:"Dancing Script", cursive;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  text-align:left;
  font-size:14px;
  margin-left:25px;
}

.bt{
  height: 22px;
  width: 22px;
  background-color: black;
  border-radius: 50%;
  display: inline-block;
  text-align:center;
  padding:1px;
  font-size:15px;
  color:white;
  font-weight:bold;
  font-family: Arial;
}

.wt{
  height: 23px;
  width: 23px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
  text-align:center;
  padding:0px;
  font-size:15px;
  border: 1px solid black;
  color:black;
 font-weight:bold;
  font-family: Arial;

}

.players{
  padding-left:30px;
}


