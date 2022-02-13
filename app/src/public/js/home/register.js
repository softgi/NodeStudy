"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw");
const registerBtn = document.querySelector("#button");

function register(){
    if (!id.value) return alert("아이디를 입력해주세요.");
    if (pw.value !== confirmPw.value)  return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        pw: pw.value,
        name: name.value,
        confirmPw: confirmPw.value,
    }
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = '/login'
        } else {
            if (res.err) return alert("에러");
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러발생"))
    });
    
};

registerBtn.addEventListener("click", register);
