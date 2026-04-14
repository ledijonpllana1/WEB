var x=5

if(x>5){
    console.log(x + "value is bigger than two")
} else{
    console.log(x + "value is less than two")
}



var input = document.getElementById('input_id')
var button = document.getElementById('btn_id')
var text = document.getElementById('text_id')

button.onclick = function(){
    var value = parseInt(input.value);

    if(value >10){
        text.innerHTML = "input value is greater than 10"
    }
    else if(value < 10){
        text.innerHTML = "input value is less than 10"
    }
    else if(value === 10){
        text.innerHTML = "input value is equal to 10"
    }
}

var input1 = document.getElementById('#input1_id')
var input2 = document.getElementById('#input2_id')
var button2 = document.querySelector('#btn2_id')
var asn = document.querySelector('#answer')

button2.addEventListener("click",function(){
    var num1 = parseInt(input1.value)  || 0;
    var num2 = parseInt(input1.value)  || 0;

    asn.innerHTML = "total" +(num1+num2)
})

