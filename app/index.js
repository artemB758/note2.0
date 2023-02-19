// Работа с пользоватилем 

let userName = prompt("Введите свое имя", "");

const heading = document.createElement("h1");
heading.textContent = "Привет, " + userName;
document.body.prepend(heading)

// Работа с кнопкой
const form = document.querySelector(".form");
form.style.visibility = "hidden";
const buttonClick = document.querySelector(".button");
const choise = document.getElementById("choise");
choise.style.visibility = "hidden";
const textContent = document.getElementById("text-content");
textContent.style.visibility = "hidden";
const create = document.getElementById("create");
create.style.visibility = "hidden";


buttonClick.addEventListener("click", buttonCl);

function buttonCl(){
   
    form.style.visibility = "visible";
    choise.style.visibility = "visible";
    textContent.style.visibility = "visible";
    create.style.visibility = "visible";
    

}

// Работа с вводом


create.addEventListener("click", creatingANote);
let listValue = document.createElement("ul");

function creatingANote(){
    choiseValue = document.createElement("h2");
    choiseValue.textContent = choise.value;
    choiseValue.appendChild(listValue);
    document.body.appendChild(choiseValue);



    textValue = document.createElement("li");
    textValue.innerHTML = textContent.value;
    listValue.appendChild(textValue);
    document.body.appendChild(listValue)

    // Добавление ключа и значения через Map

    const resultValue = new Map();

    resultValue.set(choiseValue.textContent, textValue.innerHTML);

    console.log(resultValue) 
}
    
