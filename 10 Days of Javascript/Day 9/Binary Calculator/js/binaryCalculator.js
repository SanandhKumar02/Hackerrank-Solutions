var scr='';

function calculate(){
    if(scr.indexOf('+') != -1){
        var bin = scr.split('+');

        var sum = parseInt(bin[0],2) + parseInt(bin[1],2);
        var ans = sum.toString(2);
    }
    else if(scr.indexOf('-') != -1){
        var bin = scr.split('-');

        var dif = parseInt(bin[0],2) - parseInt(bin[1],2);
        var ans = dif.toString(2);
    }
    else if(scr.indexOf('*') != -1){
        var bin = scr.split('*');

        var mul = parseInt(bin[0],2) * parseInt(bin[1],2);
        var ans = mul.toString(2);
    }
    else if(scr.indexOf('/') != -1){
        var bin = scr.split('/');

        var divi = parseInt(bin[0],2) / parseInt(bin[1],2);
        var ans = divi.toString(2);
    }
    scr = ans;
    document.getElementById("res").innerHTML = scr
}

function input(ch){
    scr += ch;
    document.getElementById("res").innerHTML = scr;
}

function clearScr(){
    scr = "";
    document.getElementById("res").innerHTML = scr;
}