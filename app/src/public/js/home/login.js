"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("#button");

function loginBtn(){
    if (!id.value) return alert("아이디를 입력해주세요.");
    if (!pw.value) return alert("비밀번호를 입력해주세요.");

    const req = {
        id: id.value,
        pw: pw.value
    }

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = '/'
        } else {
            if (res.err) return alert("에러");
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러발생"))
    });
};

btn.addEventListener("click", loginBtn);
