const imgs= document.querySelectorAll('.header-slider ul img');
const prev= document.querySelector('.control-prev');
const next=document.querySelector('.control-next');
let n=0;
function changeslide(){
    for(let i =0;i<imgs.length;i++){
        imgs[i].style.display="none";


    }
    imgs[n].style.display="block";
    
}
changeslide();
prev.addEventListener('click',(e)=>{
    if(n>0){
        n--;

    }
    if(n==0){
        n=imgs.length-1;
        
    }
    changeslide();
});
next.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;

    }
    if(n==imgs.length-1){
        n=0;
        
    }
    changeslide();
});
const sliding=document.querySelectorAll('.products');
for(const item of sliding){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}

