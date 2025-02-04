"use strict";

// feature: adicionar amigos na lista
let listOfFriends = new Array();

const friendNameInput = document.querySelector(".input-add-name");
const listContainer = document.querySelector(".friend-list-container");
const btnAddFriend = document.querySelector(".button-input");
const btnDraw = document.querySelector(".button-draw");
let switchList = false;

const createItem = (tagName, text) => {
  let newItem = document.createElement(tagName);
  const content = document.createTextNode(text);

  newItem.appendChild(content);

  return newItem;
};

const raffler = (list) => {
  return Math.floor(Math.random() * list.length);
};

// adiciona o nome na lista de amigos e exibe o nome na tela
btnAddFriend.addEventListener(
  "click",
  (event) => {
    event.preventDefault();

    if (switchList) {
      // limpa os itens do container para um novo sorteio
      listContainer.replaceChildren();
      switchList = false;
    }

    // normaliza a entreda e limpa o input
    let name = friendNameInput.value.toUpperCase();
    friendNameInput.value = "";

    if (name.trim().length === 0) {
      // libera o thread usado pelo handle, passando o alert para o final da fila
      Promise.resolve().then(() => {
        alert("Adione um nome válido.");
      });
      return;
    }

    if (listOfFriends.includes(name)) {
      Promise.resolve().then(() => {
        alert("Esse amigo já foi incluso na lista.");
      });
      return;
    }

    listOfFriends.push(name);

    /*
      poderia adiocionar o elemente diretamente, sem o foreach, mas como a atividade 
      solicitava o emprego do laço, ele foi utilizado.
    */
    listContainer.replaceChildren();
    listOfFriends.forEach((item) => {
      listContainer.appendChild(createItem("li", item));
    });
  },
  false
);

// sorteia um amigo secreto da lista
btnDraw.addEventListener(
  "click",
  (event) => {
    event.preventDefault();

    if (listOfFriends.length !== 0) {
      let randomIndex = raffler(listOfFriends);
      let resultItem = createItem(
        "li",
        `O amigo sorteado é: ${listOfFriends[randomIndex]}`
      );

      // limpa a lista de amigos para adicionar o único escolhido
      listContainer.replaceChildren();

      listContainer.appendChild(resultItem);

      document.querySelector(".friend-list-container > li").setAttribute("id", "result-style");

      switchList = true;
      listOfFriends = new Array();

    } else {
      Promise.resolve().then(() => {
        alert("Não há amigos para o sorteio...");
      });
      return;
    }
  },
  false
);