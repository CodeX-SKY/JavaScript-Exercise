let box = document.querySelector(".box");
let content = document.querySelector(".content");
let title = document.querySelector(".title");
let change = document.querySelector(".change");
let hidden = document.querySelector(".hidden");
let tag = document.querySelector(".tag");
let picture = document.querySelector(".picture");


change.addEventListener('click' , function(){
    content.classList.add("box-center");
    box.classList.add("box-br")
    content.classList.add("content-br")
    tag.classList.add("tag2")
    hidden.classList.add("hidden2")
    picture.classList.add("picture2")

    title.textContent = "Page design and text were changed";
    title.classList.add("title2");
    change.textContent = "Different";
    change.classList.add("change2");
})

hidden.addEventListener('click' , function(){
    content.classList.remove("content-br")
    hidden.classList.remove("hidden2");

    title.textContent = "WOW";
})