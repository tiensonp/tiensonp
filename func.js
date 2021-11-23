function duckduckgo1(e) {
    var data =JSON.stringify(e)
    document.getElementById("tags").innerHTML = 'adsog'+data
    //var keyword1 = e[0].phrase
    //document.getElementById("demo1").innerHTML = keyword1    
}

function unshift(e) {
    if (e) {    
    
	var allsp=''
    var tongproduct=e.mods.itemList.content.length
    for (var p0 = 0; p0 < tongproduct; p0++){
    var imgUrlp = e.mods.itemList.content[p0].image.imgUrl
    var productIdp = e.mods.itemList.content[p0].productId
    var titlep = e.mods.itemList.content[p0].title.displayTitle
	
    try {
    /*var pricep = e.mods.itemList.content[p0].trace.utLogMap.formatted_price
    var productidp = e.mods.itemList.content[p0].trace.utLogMap.x_object_id
    var tradep = e.mods.itemList.content[p0].trade.tradeDesc    
    */
	} 
    catch (error) {}
	
    allsp+='<img src="'+imgUrlp+'"/><p>'+productIdp+'</p><p>'+titlep+'</p>'
    }
	
	
    var imgUrl1 = e.mods.itemList.content[0].image.imgUrl
    var productId2 = e.mods.itemList.content[0].productId
    var title1 = e.mods.itemList.content[0].title.displayTitle
    
    try {
    var price1 = e.mods.itemList.content[0].trace.utLogMap.formatted_price
    var productid1 = e.mods.itemList.content[0].trace.utLogMap.x_object_id
    var trade1 = e.mods.itemList.content[0].trade.tradeDesc
    } 
    catch (error) {}
        
    var tagsall=e.seoCrossLink[0].hrefLinks[0].displayName
    
    var tagsall=""
    
    try {
    var tongtag1=e.seoCrossLink[0].hrefLinks.length
    for (var s0 = 0; s0 < e.seoCrossLink.length; s0++)
    for (var s = 0; s < tongtag1; s++)
    tagsall+=s0+'+'+s + '-' + e.seoCrossLink[s0].hrefLinks[s].displayName+', '
    } catch (error) {}
    
  //document.getElementById("demo0").innerHTML ='<img src="'+imgUrl1+'"/><p>'+price1+'</p><p>'+productid1+'</p><p>'+trade1+'</p><p>'+productId2+'</p><p>'+title1+'</p><p>'+tagsall+'</p><p>' 
  
  document.getElementById("demo0").innerHTML =allsp+'<img src="'+imgUrl1+'" width="300" height="400" alt="tessalt" /><p>'+price1+'</p><p>'+productid1+'</p><p>'+trade1+'</p><p>'+productId2+'</p><p>'+title1+'</p><p>'+tagsall+'</p><p>' 
  
  document.getElementById("title").innerHTML = title1
  document.getElementById("detail").innerHTML =title1
  
  
  var data =JSON.stringify(e)
  //document.getElementById("demo1").innerHTML = data
  
    } else document.getElementById("demo1").innerHTML = "No Result"
}


