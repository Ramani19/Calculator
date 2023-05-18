



var calc = document.querySelector('.numbers')
var textOut=document.querySelector('.text-ou')
var his=document.querySelector(".num-hist")
var his_but=document.querySelector(".button-hist")
// console.log(calc)
h=0
hist=[]
ca=0
function histo(){
    
    if(h==0){
          his_but.innerHTML="keypad"
          his.lastElementChild.className="h hist"

         
         //his.lastElementChild.appendChild(h2)
          h=document.querySelector(".hist")
        //   var x=document.createElement("div")
        //   x.className='X-button'
        //   x.innerHTML='X'
        //   h.appendChild(x)
          
          
          
          hist.forEach(e => {
            var n=document.createElement("div")
            console.log(n)
            n.className="array-hist array-click"
             var n1=document.createElement("div")
            var n2=document.createElement("div")
            n1.innerHTML=e[0]
            n2.innerHTML=`= ${e[1]}`
            n.appendChild(n1)
            n.appendChild(n2)
            console.log(n)
            h.appendChild(n)
            n.addEventListener("click",()=>{
                textOut.firstElementChild.textContent=""
                textOut.lastElementChild.textContent=""
                console.log(e[1])
                a=e[1].toString().split("")
                console.log(a)
                for (const t of a) {

                    textOut.firstElementChild.appendChild(newNode(t))
                }
                textOut.firstElementChild.appendChild(createLine())
                line=document.querySelector(".line")
            })
            
          });
          var clear_his=document.createElement("div")
          clear_his.className="array-hist clear-his"
          clear_his.innerHTML="clear History"
          h.appendChild(clear_his)
          clear_his.addEventListener("click",()=>{
            hist=[]
            he=document.querySelector(".hist")
            he.textContent=""
            //console.log()
            he.appendChild(clear_his)

            
          })
          


          h=1
          
    }

    else{

        his_but.innerHTML="history"
        his.lastElementChild.textContent=null
        his.lastElementChild.className="hist j"

        // his.lastElementChild.
        h-=1
    }
}



function createButton(val) {
    var button = document.createElement("button")
    button.className = "button-num"
    button.innerText = val
    button.value = val
    
   
    // console.log(calc)
    calc.append(button)


}

var input = document.querySelector(".text")
function createLine()
{
    var line=document.createElement("span")
    line.className="line"
    line.innerText="|"
    return line
}
input.append(createLine())
line=document.querySelector(".line")


var symbols = ['C', '()', '/',"**", 7, 8, 9, "*", 4, 5, 6, '-', 1, 2, 3, '+', '+/-', 0, '.', '=']
symbols.forEach(element => {
    createButton(element)
    
});
var buttons =document.getElementsByClassName("button-num")
for (const button of buttons) {
            button.addEventListener("click",(e)=>{
             var val=e.target.value
             if(val=="="){
                 
             }
             showOnCal(val)
            })
         }
        


// function butt(){
//     return{
//     symbols : ['C', '()', '/',"**", 7, 8, 9, "*", 4, 5, 6, '-', 1, 2, 3, '+', '+/-', 0, '.', '='],
//     buttons : document.getElementsByClassName("button-num"),
//     createButton(val) {
//         var button = document.createElement("button")
//         button.className = "button-num"
//         button.innerText = val
//         button.value = val
        
       
//         // console.log(calc)
//         calc.append(button)
    
    
//     },
//     createButt() {this.symbols.forEach(e=>{
//         this.createButton(e)
       
//     })
       
    
//     },
//     listener(){for (const button of this.buttons) {
//         button.addEventListener("click",(e)=>{
    //      var val=e.target.value
    //      if(val=="="){
             
    //      }
    //      this.showOnCal(val)
    //     })
    //  }
    // },
    // equal:0,
//     showOnCal(val) {
//     var c = 0
//     var x=0
    
//     if(val=="=")
//      equal++
//     else
//      equal=0

    
//     try {
//         var pre = line.previousSibling.textContent
//     }
//     catch {
//         var pre = null
//     }
//     try {
//         var next = line.nextSibling.textContent
//     }
//     catch {
//         var next = null
//     }
    
//     function braces(v){
//              console.log(ca)
//             if(pre==[/['+', '-', '*', '/', '%']/] || !pre)
//             {
//             input.insertBefore(newNode("("), line)
//             ca+=1
//             } 
//             else if(ca==0 && pre!='.'){
//                 input.insertBefore(newNode("*("), line)
//                 ca+=1
//             }
        
//          else if(ca!=0 && !isNaN(pre) ){
            
//                 input.insertBefore(newNode(")"), line)
//                 ca-=1
            
//          }
       
            
//             // else{
//             //     input.insertBefore(newNode(")"), line)
//             // }

           
            
            
        
        
//     }
//     function compute(t=1){
//         try{
//             probl=input.textContent.replace('|','')
//             result=eval(probl)
            
//             if(result)
//             {
//                 if(result%1!=0)
//                   result=result.toFixed(2)
           
//              console.log("ki")
//              textOut.lastElementChild.innerHTML=result
//             }
//             if(t==0){
//                 textOut.lastElementChild.innerHTML=''
                
//                 x+=1
//                 textOut.firstElementChild.innerHTML=''
//                 // textOut.lastElementChild.className='result animate'
                
//                 re=result.toString().split('')
//                 console.log(re)
//                 for (const key of re) {
//                     input.append(newNode(key))
//                 }
//                 //textOut.lastElementChild.innerHTML=""
//                 input.append(createLine())
//                 line=document.querySelector(".line")
               

//             }
//             return [probl,result]
//         }
//         catch{
            
//         }
//     }
    
//     console.log(input.childNodes)
//     console.log(pre)
//     switch (val) {
//         case 'C':
//             input.innerHTML = ""
//             input.append(createLine())
//                 line=document.querySelector(".line")
//                 textOut.lastElementChild.innerHTML=''

//             break;
//         case "/['+', '-', '*', '/', '%','.']/":
//             if (pre && !isNaN(pre) && !isNaN(next)) {
        
//                 input.insertBefore(newNode(val), line)
//             }
//             break;
//         case '=':
//             console.log(equal)
//             if(equal<=1)
//             {
//                 r=compute(0)
//                 if(r!=undefined)
//                 hist.push(r)
                
                
//                 console.log(hist)
                
//             }
//             x+=1
            
            
            
//             break;
//         case '()':
//              braces(val)
//              break;
//         case 're':
           

//             if (pre!=null) {
//                 preNode=line.previousSibling
//                 input.removeChild(preNode)
//             }
//             if(input.textContent=="|")
//                textOut.lastElementChild.innerHTML=""
//             break
//         case 'undefined' :
//             break;
//         case '+/-':
//             input.insertBefore(newNode('-'), line)
//             input.insertBefore(newNode('('), line)
//             ca+=1
//             break

//         default:
//             input.insertBefore(newNode(val), line)
//             break;

//     }
//     console.log("x",x)
//     if(x==0)
//     compute()
//     else
//     x-=1
// }
// }
// }
// butt().createButt()
// butt().listener()

input.addEventListener("click", (e) => {
    var target = e.target
    input.removeChild(line)
    target.insertAdjacentElement("afterend", line)
    console.log(e.target)

})
rem=document.querySelectorAll('.remove')
for (const re of rem) {
    re.addEventListener("click",()=>{
        showOnCal("re")
    })
    
}
function newNode(v){
    const newNode = document.createElement("span")
        newNode.className = "num"
        newNode.innerHTML = v
    return newNode
}

var equal=0
function showOnCal(val) {
    var c = 0
    var x=0
    
    if(val=="=")
     equal++
    else
     equal=0

    
    try {
        var pre = line.previousSibling.textContent
    }
    catch {
        var pre = null
    }
    try {
        var next = line.nextSibling.textContent
    }
    catch {
        var next = null
    }
    
    function braces(v){
             console.log(ca)
            if(pre==[/['+', '-', '*', '/', '%']/] || !pre)
            {
            input.insertBefore(newNode("("), line)
            ca+=1
            } 
            else if(ca==0 && pre!='.'){
                input.insertBefore(newNode("*("), line)
                ca+=1
            }
        
         else if(ca!=0 && !isNaN(pre) ){
            
                input.insertBefore(newNode(")"), line)
                ca-=1
            
         }
       
            
            // else{
            //     input.insertBefore(newNode(")"), line)
            // }

           
            
            
        
        
    }
    function compute(t=1){
        try{
            probl=input.textContent.replace('|','')
            result=eval(probl)
            
            if(result)
            {
                if(result%1!=0)
                  result=result.toFixed(2)
           
             console.log("ki")
             textOut.lastElementChild.innerHTML=result
            }
            if(t==0){
                textOut.lastElementChild.innerHTML=''
                
                x+=1
                textOut.firstElementChild.innerHTML=''
                // textOut.lastElementChild.className='result animate'
                
                re=result.toString().split('')
                console.log(re)
                for (const key of re) {
                    input.append(newNode(key))
                }
                //textOut.lastElementChild.innerHTML=""
                input.append(createLine())
                line=document.querySelector(".line")
               

            }
            return [probl,result]
        }
        catch{
            
        }
    }
    
    console.log(input.childNodes)
    console.log(pre)
    switch (val) {
        case 'C':
            input.innerHTML = ""
            input.append(createLine())
                line=document.querySelector(".line")
                textOut.lastElementChild.innerHTML=''

            break;
        case "/['+', '-', '*', '/', '%','.']/":
            if (pre && !isNaN(pre) && !isNaN(next)) {
        
                input.insertBefore(newNode(val), line)
            }
            break;
        case '=':
            console.log(equal)
            if(equal<=1)
            {
                r=compute(0)
                if(r!=undefined)
                hist.push(r)
                
                
                console.log(hist)
                
            }
            x+=1
            
            
            
            break;
        case '()':
             braces(val)
             break;
        case 're':
           

            if (pre!=null) {
                preNode=line.previousSibling
                input.removeChild(preNode)
            }
            if(input.textContent=="|")
               textOut.lastElementChild.innerHTML=""
            break
        case 'undefined' :
            break;
        case '+/-':
            input.insertBefore(newNode('-'), line)
            input.insertBefore(newNode('('), line)
            ca+=1
            break

        default:
            input.insertBefore(newNode(val), line)
            break;

    }
    console.log("x",x)
    if(x==0)
    compute()
    else
    x-=1

    
    
    
    
    
    
    

   



}

    
    
      
        
        
   
    




