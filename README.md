## is-host-up

### install 
<code> npm install is-host-up </code>

### usage 

### isHost(url, port, callback)

Sends an http get request to the server and returns a callback response . 

### example 
<pre>
  var isHost = require("is-host-up"); 
  
  isHost('google.com','80',function(result){  
    console.log("host: "  + result); 
  });
 
 </pre>
 
 ### license
 
 MIT. Copyright (c) Ramin Taghizada.