window.onload= function () {
    var span=document.getElementById("content").getElementsByTagName("span");
    var ul=document.getElementById("content").getElementsByTagName("ul");
    if(span.length==ul.length){
        for(var i=0;i<span.length;i++){
            span[i].id=i;
            span[i].onclick=function(){
                if(ul[this.id].style.display=="block"){
                    ul[this.id].style.display="none";
                }
                else {
                    for (var k = 0; k < span.length; k++) {
                        ul[k].style.display = "none";
                    }
                    ul[this.id].style.display = "block";
                }
            }
        }
    }
}