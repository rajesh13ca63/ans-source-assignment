/* This method is used for change backgroud color upto enter number */
function highlightBox() {
    reSetBackColor();
    var numberArray = [1,2,4,8,16,32,64];
    var num = document.getElementById("inputval").value;
    if (num < 1 || num>127) {
        document.getElementById('warning-mesg').style.display = 'block';
        return;
    }
    for(var i =6; i>=0; i--) {
        if(num>= numberArray[i] ) {
            num = num%numberArray[i];
            document.getElementById(i).style.background = "#FFFF00";
            if(num == 0) 
                break;
        }
    }
}

/* This Method is used for reset box color */
function reSetBackColor() {
     document.getElementById('warning-mesg').style.display = 'none';
    for(var i =6; i>=0; i--) {
        document.getElementById(i).style.background = "#E0E0E0";
    }
}