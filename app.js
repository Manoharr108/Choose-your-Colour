let input = document.getElementById("input");
let change = document.getElementById("chg");
let clear = document.getElementById("clr");
// change.addEventListener("click",(input)=>{
    //     document.body.style.background = input;
    //     console.log(input);
    // })
    
function color(){
    document.body.style.background = (input.value).toLowerCase();
    if(input.value == "black"){
        let head = document.getElementById("heading"). style. color = "white";
        // head.style.font = "white";
    }
    else{
        let head = document.getElementById("heading"). style. color = "black";
    }

}
//
function damage(){

    input.value = "";
}
