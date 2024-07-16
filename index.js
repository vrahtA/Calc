const display = document.getElementById("display"); 
function addtoDisplay(input){
    display.value += input;
}
function cleanDisplay(){
    display.value = "";
}
function result(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR!"
    }
}