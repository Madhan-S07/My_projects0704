let myleads = []
const inputEL = document.getElementById("ip")
const savebtn = document.getElementById("btn-save")
const ulEl = document.getElementById("ul-el")


let delbtn = document.getElementById("btn-del")
delbtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myleads = []
    render(myleads)
})


const leadslocalstroage = JSON.parse( localStorage.getItem("myleads") )
if(leadslocalstroage){
    myleads = leadslocalstroage
    render(myleads)
}

let btntab = document.getElementById("btn-tab")
btntab.addEventListener("click",function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads) )
        render(myleads)
    })    
})


savebtn.addEventListener("click",function(){
    myleads.push(inputEL.value)
    inputEL.value = ""
    localStorage.setItem("myleads", JSON.stringify(myleads) )
    render(myleads)

    console.log( localStorage.getItem("myleads") )
})


function render(leads){

    let listitems = ""
    
    for (let i=0;i<leads.length;i++){
        listitems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listitems

}    
