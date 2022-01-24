let NameTxt = document.getElementById('NameTxt');
let Btn1 = document.getElementById('Btn1');
let DeleteTxt = document.getElementById('DeleteTxt');
let Btn2 = document.getElementById('Btn2');
let GroupNumTxt = document.getElementById('GroupNumTxt');
let Btn3 = document.getElementById('Btn3');
let Btn4 = document.getElementById('Btn4');
let CardTxt = document.getElementById('CardTxt');
let AddCard = document.getElementById('AddCard');

function GetNames(name){
    let Card = document.createElement("p");
    Card.className = "card-text fontColor2";
    Card.textContent = name;
    CardTxt.appendChild(Card);
    Card.addEventListener('click', function(){
        Card.remove();
    })
}

Btn1.addEventListener('click', () => {
     GetNames(NameTxt.value);
});

function RemoveNames(){
};

 Btn2.addEventListener('click', () =>{
    
 });


 Btn3.addEventListener('click', () =>{
    AddGroup(AddCard.value);
 });