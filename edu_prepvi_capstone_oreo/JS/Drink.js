
//using button element to access their respective id names//
const button1 = document.getElementById("cinamon")
const button2 = document.getElementById("cider")
const button3 =document.getElementById("chai")
const button4 = document.getElementById("soda")
const button5 = document.getElementById("water")
const button6 = document.getElementById("ice-coldmilk")
const button7 = document.getElementById("yogurt")
const button8 = document.getElementById("cold-milk")
const button9 = document.getElementById("Orange")
//Addiong eventlistener to button element//

button1.addEventListener("click", function() {
    button1.textContent = 'Added cinamon';
    cinamon.style.color ="red";

    cinamon.innerText = 'success'
});  

button2.addEventListener("click", function() {
    button2.textContent = 'Added cider';
    cider.style.color ="red";

    cider.innerText = 'success'
});  

button3.addEventListener("click", function() {
    button3.textContent = 'Added chai';
    chai.style.color ="red";

    chai.innerText = 'success'
});  

button4.addEventListener("click", function() {
    button4.textContent = 'Added cinamon';
    soda.style.color ="red";

    soda.innerText = 'success'
}); 
button5.addEventListener("click", function(){
    button5.textContent = 'Added cinamon';
    water.innerText ='success'
    button5.style.color ="red"
});

button6.addEventListener("click",function(){
    button6.textContent = 'added cinamon';
    button6.innerText = 'success'
    button6.style.color ="red"
});

button7.addEventListener("click",function(){
    button7.textContent ='added yogurt';
    button7.innerText = 'success'
    button7.style.color ="red"


});

button8.addEventListener("click",function(){
    button8.textContent = 'added coldmilk';
    button8.innerText = 'yes'
})

button9.addEventListener("click",function() {
    button9.textContent = 'added orange';
    button9.innerText = 'yes'
})
