export default function (index) {
    
    var arrow = document.querySelector('#wrap #head .arrow')
    var liNodes = document.querySelectorAll('#wrap #head .head-main .list li')
    //内容ul
    var listNode = document.querySelector('#wrap #content > .list') 
    var content = document.querySelector('#wrap #content')
    var poliNodes = document.querySelectorAll('#wrap #content > .points > li')

    //同步内容
    content.index = index;
    console.log(index);
    
    //切换nav
    for (var j = 0; j < liNodes.length; j++) {
        liNodes[j].classList.remove('active');
        poliNodes[j].classList.remove('active');
    }
    liNodes[index].classList.add('active');
    poliNodes[index].classList.add('active');
    //同步arrow
    arrow.style.left = liNodes[index].offsetLeft + liNodes[index].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';

    //切换每一屏
    listNode.style.top = `${-content.offsetHeight*index}px`
} 
