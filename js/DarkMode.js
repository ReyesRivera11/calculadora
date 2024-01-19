let toggle = document.getElementById('toggle');
let body = document.body;

export const darkmode = () => {
    toggle.addEventListener("click",()=>{
        if(document.body.classList.contains("dark")){
            body.classList.remove("dark");
        }else{
            body.classList.add("dark");
        }
        let mySrc = toggle.getAttribute('src');
        mySrc === '/img/sol.png' ? 
        toggle.setAttribute('src', '/img/luna.png') : toggle.setAttribute('src', '/img/sol.png');
    })
    
    
}