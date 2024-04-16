
let saveEl=document.getElementById("save-el")
let count = 0
let countEl=document.getElementById("count-el")


// console.log(count)  

function increment(){
    count=count+1
    document.getElementById("count-el").innerText=count
}
function save(){
    let countStr=count+" - "
    saveEl.textContent+=countStr
    countEl.textContent=0
    count=0  
}