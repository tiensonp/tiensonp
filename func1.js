function duckduckgo1(e1) {
    var data =JSON.stringify(e1)
	data = data.replace(/<b>/g, "")
	data = data.replace(/<\/b>/g, "")
    //document.getElementById("tags").innerHTML = 'adsog'+data
    //var keyword1 = e1[0].phrase
    //document.getElementById("demo1").innerHTML = keyword1   

//alert(data);

var target=data.match(/\"(.+?)\"/gi)
var disdata=''

for(k=0;k<target.length-4;k++){
target[k] = target[k].replace(/\"/g, "")
disdata +=target[k]+'<br>'
}
document.getElementById("tags").innerHTML =disdata
	
}



