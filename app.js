const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
res.send(`
<!DOCTYPE html>
<html>
<head>
<title>My Express Website</title>

<style>

body{
font-family: Arial;
margin:0;
background: linear-gradient(120deg,#3498db,#8e44ad);
color:white;
text-align:center;
}

nav{
background:black;
padding:15px;
}

nav a{
color:white;
margin:20px;
text-decoration:none;
font-size:18px;
font-weight:bold;
}

nav a:hover{
color:yellow;
}

.container{
margin-top:100px;
}

button{
padding:12px 25px;
border:none;
background:#ffcc00;
font-size:18px;
border-radius:5px;
cursor:pointer;
}

button:hover{
background:white;
}

footer{
margin-top:150px;
background:black;
padding:20px;
}

</style>

</head>

<body>

<nav>
<a href="/">Home</a>
<a href="/about">About</a>
<a href="/contact">Contact</a>
</nav>

<div class="container">
<h1>Welcome to My Express Server 🚀</h1>
<p>This is an amazing interface built with Express</p>

<button onclick="alert('Welcome Developer')">
Click Me
</button>
</div>

<footer>
<p>Express Server © 2026</p>
</footer>

</body>
</html>
`)
})

app.get("/about", (req,res)=>{
res.send("<h1>About Page</h1><p>This website is built with Express.js</p>")
})

app.get("/contact", (req,res)=>{
res.send("<h1>Contact Page</h1><p>Email: example@email.com</p>")
})

app.listen(PORT,()=>{
console.log("Server running at http://localhost:3000")
})