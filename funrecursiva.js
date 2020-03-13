var count = 1;
var data = 0;
function recurs(){
    if(((count % 2 ==0)&&(count % 3 == 0)&&(count % 10 == 0))&& data != 1){
        return 1;
    }
    else{
        count ++;
        recurs2();
    }
}

function recurs2(){
    if(((count % 2 ==0)&&(count % 3 ==0)&&(count % 10 ==0))&& data != 1){
        return 1;
    }
    else{
        count ++;
        recurs();
    }
}

recurs();
console.log(count);