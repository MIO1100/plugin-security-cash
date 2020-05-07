//массив магнитов строчных в magnet

var meta = document.createElement('meta');
meta.name = "Access-Control-Allow-Origin";
meta.content = "*";
document.getElementsByTagName('head')[0].appendChild(meta);

var meta = document.createElement('meta');
meta.name = "Access-Control-Allow-Headers";
meta.content = "*";
document.getElementsByTagName('head')[0].appendChild(meta);


var script = document.createElement('script');
script.src = "https://code.jquery.com/jquery-3.4.0.min.js";
document.getElementsByTagName('head')[0].appendChild(script);


var script = document.createElement('script');
script.src = "http://localhost/java.js";
document.getElementsByTagName('head')[0].appendChild(script);