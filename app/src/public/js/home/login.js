"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("button");

function loginBtn(){
    const req = {
        id: id.value,
        pw: pw.value,
    }

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => console.log);
};;

btn.addEventListener("click", loginBtn);
