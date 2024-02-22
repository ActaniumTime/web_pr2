document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('Calculate').addEventListener('click', calc);
    document.getElementById('Close').addEventListener('click', clos);
    document.getElementById('clear').addEventListener('click', clea);
});


function calc (){
    var x, y, result;
    x = document.getElementById('x').value;
    y = document.getElementById('y').value;
    result = x+y;
    document.getElementById('result').value = result;
    console.log(x);
}

function clos () {
    if(confirm("Do you want to leave the page ?"))
    {
        window.close();
    }
    else{
        console.log('it`s just work');
    }
}

function clea (){
    document.getElementById('result').value = 0;
    document.getElementById('x').value = 0;
    document.getElementById('y').value = 0;
}