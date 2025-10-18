let i=document.getElementById('timer');
let h=0;
let m=0;
let s=0;
let ms=0;
let text="";

function format(num, size = 2) {
  return String(num).padStart(size, "0");
}


// event 
let start=document.getElementById('start');
start.addEventListener('click',()=>{
    start.style.background="#ec9bb9";
    let inter =setInterval(() => {
    
    switch(true){
        case (ms==999):
            ms=0;
            s++;
            break;
            
            
        case (s==59):
            s=0;
            m++;
            break;
        case (m==59):
            m=0;
            h++;
            break;
        default:
            ms++
            
    }
    text=format(h) + ":" + 
    format(m) + ":" + 
    format(s) + ":" + 
    format(ms, 3);
    i.textContent=text;
    
}, 1);

    let stop =document.getElementById('stop');
    stop.addEventListener('click',()=>{
        clearInterval(inter);
        stop.style.background="#ec9bb9";
        start.style.background="#f92672"
    })

    let reset=document.getElementById('reset');
    reset.addEventListener('click',()=>{
        clearInterval(inter);
        m=0;
        h=0;
        s=0;
        ms=0;
        i.textContent="00:00:00";
        stop.style.background="#ec9bb9";
        start.style.background="#f92672";
    })

    
    stop.style.background="#f92672";
})




