
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function Generete(){

    let para = document.getElementById("p1")
    let para1 = document.getElementById("p2")

    para.textContent = ""
    para1.textContent =""




    
    

    for (let i =0; i<10;i++){

       

        let random = Math.floor(Math.random()*characters.length)
        let random1 = Math.floor(Math.random()*characters.length)

        

        para.textContent += characters[random]
        para1.textContent += characters[random1]

        

        







    }
    
    


    

   

    

}

