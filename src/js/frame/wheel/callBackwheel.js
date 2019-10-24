import move from '../move/move'
export default function (event,index) {
    
    var contentNode = document.querySelector('#wrap #content')
    var poliNodes = document.querySelectorAll('#wrap #content > .points > li')
    var length = poliNodes.length;
    
    var dir = '';
    //兼容ie/chrome
    if(event.wheelDelta&&event.wheelDelta>0){
        dir = 'up';
        
    }else if(event.wheelDelta&&event.wheelDelta<0){
        dir = 'down';
        
    }

    if(event.detail&&event.detail<0){
        dir = 'up';
    }else if(event.detail&&event.detail>0){
        dir = 'down';
    }

    //判断滚动方向
    switch (dir) {
        case dir='up':
            index > 0 ? index-- : 0;
            move(index);
            break;
        case dir='down':
            index < length-1 ? index++ : length-1 ;
            move(index);
            break;    
        default:
            break;
    }
    contentNode.index = index;//(可不要)
    console.log(index,"----");
    
    
}