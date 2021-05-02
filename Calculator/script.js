let sum=0;
let operator=null;
const ans =document.querySelector('.answer');
const number =document.querySelector('.numberpad');
const operatorRow =document.querySelector('.operator-row');
const operatorCol =document.querySelector(".operator-col");


number.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){
        if(ans.textContent==0)
            ans.textContent=e.target.textContent;
        else ans.textContent+=e.target.textContent;
    }
});


operatorRow.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){
        switch(e.target.textContent){
            case "AC":
                ans.textContent=0;
                sum=0;
                break;
            case "del":
                if(ans.textContent.length>1)
                    ans.textContent=ans.textContent.substring(0,ans.textContent.length-1);
                else
                    ans.textContent=0;
                break;
            case "/":
                if(sum==0){
                    sum=parseInt(ans.textContent);
                }
                ans.textContent=0;
                operator=e.target.textContent;                
                break;
            default:
                break;
        };  
    }
    
});

operatorCol.addEventListener("click",function(e){
    if(e.target.tagName==="BUTTON"){

        if(e.target.textContent=="="){
            switch(operator){
                case "x":
                    sum=sum*parseInt(ans.textContent);
                    break;
                case "-":
                    sum=sum-parseInt(ans.textContent);
                    break;
                case "+":
                    sum=sum+parseInt(ans.textContent);
                    break;
                case "/":
                    sum=sum/parseInt(ans.textContent);
                    break;
                default:
                    sum=ans.textContent;
                    break;
            };
            operator=null;
            ans.textContent=Math.round(sum);
        }
        else{
            if(sum==0){
                sum=parseInt(ans.textContent);
            }
            ans.textContent=0;
            operator=e.target.textContent;
        }
        
    }
    
});


