

// scroller navBar
var scroller = 0;
var navBar = document.getElementById('navBar');

window.addEventListener('scroll', function(){
    var scrollTop = document.documentElement.scrollTop;
    if(scrollTop > scroller ){
        navBar.style.top = '-250px';
    }else{
        navBar.style.top = '0%';
    }
    scroller = scrollTop;
})