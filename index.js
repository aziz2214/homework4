var express = require('express'); 
var app = express();
var path =require("path"); 



app.get('/', function(req, res) { 
    res.sendFile(path.join(__dirname+'/pages/home.html'));
})

app.get('/start', function(req, res) { 
    res.sendFile(path.join(__dirname+'/pages/start.html'));
        
})

app.get('/ironman', function(req, res) { 
    res.sendFile(path.join(__dirname+'/pages/spiderman.html'));
        
})

app.get('/spiderman', function(req, res) { 
    res.sendFile(path.join(__dirname+'/pages/captainamerica.html'));
        
})

app.get('/captainamerica', function(req, res) { 
    res.sendFile(path.join(__dirname+'/pages/thor.html'));
        
})

app.get('/thor', function(req, res) { 
    res.sendFile(path.join(__dirname+'/pages/end.html'));
        
})




app.listen(process.env.PORT || 3000); 
