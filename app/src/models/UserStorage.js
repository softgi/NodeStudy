"use strict"

class UserStorage {
    static #users = {
        id: ["wo","wa","wi"],
        pw: ["12","34","56"],
        name: ["바","보","야"],
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

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);//users.id와 일치하는 index 값을 리턴해준다. 없으면 -1을 리터
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});
        console.log(userInfo);
        return userInfo;
    }
}

module.exports = UserStorage;