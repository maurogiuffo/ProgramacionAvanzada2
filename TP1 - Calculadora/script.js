function suma()
{
    var array= getNumbersArray();
    var result= array[0] + array[1];
    showResult(result)
}

function resta()
{
    var array= getNumbersArray();
    var result= array[0] - array[1];
    showResult(result)
}

function multi()
{
    var array= getNumbersArray();
    var result= array[0] * array[1];
    showResult(result)
}

function div()
{
    var array= getNumbersArray();
    var result= array[0] / array[1];
    showResult(result)
}


function getNumbersArray()
{
    var number1= parseInt(document.getElementById("number1").value);
    var number2= parseInt(document.getElementById("number2").value);
    var array= [number1,number2];
    return array;
}

function showResult(result)
{
    console.log(result);
    alert(result);
    document.getElementById("result").innerHTML= "RESULT " + result;
}