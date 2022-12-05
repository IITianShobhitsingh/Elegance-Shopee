//search filter
var btn = document.querySelector('#button')
var data = document.querySelector('.search')
btn.addEventListener('click',function(e){
    console.log(data.value);
})


//for directing to affilated site
var shift1 = document.querySelector('#btn1')
shift1.addEventListener('click',function(e){
    location.href="https://amazon.com";
})