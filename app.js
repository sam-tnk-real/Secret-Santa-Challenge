"use strict";

// feature: adicionar amigos na lista
let listOfFriends = new Array(); 

const friendNameInput = document.querySelector(".input-add-name"); 
const listContainer = document.querySelector(".friend-list-container");
const btnAddFriend = document.querySelector(".button-input");
const btnDraw = document.querySelector(".button-draw");

const createItem = (tagName, text) => {
  let newItem = document.createElement(tagName);
  const content = document.createTextNode(text);

  newItem.appendChild(content);

  return newItem;
}

const draw = (list) => {
  return (Math.random() * list.length) + 1; 
}

// adiciona o nome na lista de amigos e exibe o nome na tela
btnAddFriend.addEventListener("click", (event) => {
  event.preventDefault();

  let name = friendNameInput.value;
  friendNameInput.value = "";

  if (name.trim().length === 0) {
    alert("Adione um nome válido.");  
    return;
  }

  listOfFriends.push(name);
  listContainer.appendChild(createItem("li", name));

}, false);
