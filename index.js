let disp = document.getElementById("input") ;

function output(num){
    disp.value += num;
}

function calc(){
    try{
        disp.value= eval(disp.value);
    }
    catch(err){
        alert("Invalid Format!");
    }
}

function Clear(){
    disp.value= "";
}

function Del(){
    disp.value = disp.value.slice(0,-1);
}