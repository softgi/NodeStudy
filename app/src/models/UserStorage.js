"use strict"

const fs = require("fs").promises;

class UserStorage {


    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);//users.id와 일치하는 index 값을 리턴해준다. 없으면 -1을 리턴
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }

    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error) 
    }

    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.pw.push(userInfo.pw);
        users.name.push(userInfo.name);
        return { success: true };
    }

        // static getUsers(...fields) {
    //     const users = this.#users;
    //     const newUsers = fields.reduce((newUsers, field) => {
    //         if(users.hasOwnProperty(field)) {
    //             newUsers[field] = users[field];
    //         }
    //         return newUsers;
    //     }, {});
    //     // console.log(newUsers)
    //     return newUsers;
    // }
}

module.exports = UserStorage;