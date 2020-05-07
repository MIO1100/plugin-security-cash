//массив магнитов строчных в magnet
function search_magnet(){
	elem = Array.from(document.querySelectorAll('a'));
	for(var i = 0; i < elem.length; i++){
	if(elem[i].href.indexOf("magnet:?x")>=0){
		magnet[j] = elem[i].href;
		console.log(magnet[j]);
		j++;
		}
	}
}

function mysql(){
	j=0;	
		for (var i = 0; i < elem.length; i++)
			{
			if (elem[i].href.indexOf("magnet:?x")>=0) {
				$.ajax({
    				type: "POST",
    				url: 'http://localhost/mysql.php',
        			data: {q:magnet[j], p:page},
        			beforeSend:function(){
        				console.log("before sent");
        			},
        			success: function(d){
        				console.log("success");
						z[j]=i;
					 	result[j]=d;
						j++;
  					}
				});

			}
		}
}
function vvod(){
	console.log(result[0]);
	console.log(result[1]);
		j=0;
        for (var i=0;i<links.length;i++){
            if (links[i].href.indexOf("magnet:?x") >=0){
                links[i].href =result[j];
                j++;
            } 
        }
}
var magnet = {};
var elem = {};
var z = {};
var result = {};
var j=0;
	var page = document.location.href;

search_magnet();

mysql();
var links = document.getElementsByTagName("a");
setTimeout(vvod, 2000);
