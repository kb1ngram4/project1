import move from "./move/move"
import callbackfn from './wheel/callBackwheel'
window.onload = function () {
    var arrow = document.querySelector('#wrap #head .arrow')
    var liNodes = document.querySelectorAll('#wrap #head .head-main .list li')
    var firstLinode = liNodes[0]

    var conliNodes = document.querySelectorAll('#wrap #content > .list > li')
    var contentNode = document.querySelector('#wrap #content')
    var poliNodes = document.querySelectorAll('#wrap #content > .points > li')
    
    //头部逻辑   
    arrow.style.left = firstLinode.offsetLeft + firstLinode.offsetWidth/2 - arrow.offsetWidth/2 +'px'
    
    if(liNodes.length === poliNodes.length){
        for( var i =0; i<liNodes.length; i++){
            liNodes[i].index = i;
            poliNodes[i].index = i;
               poliNodes[i].onclick = liNodes[i].onclick = function () {
                   move(this.index);
                }
                // liNodes[i].addEventListener('click', ()=> {
                //     move(this.index);
                // })
            
        }
    }
    

//内容区

    conliNodes.forEach((liNode)=>{
        liNode.style.height = contentNode.offsetHeight + 'px'  
    })

    //鼠标滚轮
    var timer = 0;
    contentNode.index = 0;
    if(contentNode.addEventListener){
        contentNode.addEventListener('DOMMouseScroll',(event)=>{
            clearTimeout(timer)
            timer = setTimeout(() => {
                callbackfn(event,contentNode.index);
            }, 50);
            
        });
    }

    contentNode.onmousewheel=(event)=>{
        clearTimeout(timer)
        timer =  setTimeout(() => {
            callbackfn(event,contentNode.index);
        }, 50);
        
    }
    

    
    
 
}
