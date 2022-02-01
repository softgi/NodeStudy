"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("button");

function loginBtn(){
    const req = {
        id: id.value,
        pw: pw.value,
    }
};;

btn.addEventListener("click", loginBtn);
