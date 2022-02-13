"use strict"

const db = require("../config/db");

class UserStorage {


    // static #getUserInfo(data, id) {
    //     const users = JSON.parse(data);
    //     const idx = users.id.indexOf(id);//users.id와 일치하는 index 값을 리턴해준다. 없으면 -1을 리턴
    //     const usersKeys = Object.keys(users);
    //     const userInfo = usersKeys.reduce((newUser, info) => {
    //         newUser[info] = users[info][idx];
    //         return newUser;
    //     },{});

    //     return userInfo;
    // }

    // static #getUsers(data, isAll, fields) {
    //     const users = JSON.parse(data);
    //     if (isAll) return users;
    //     const newUsers = fields.reduce((newUsers, field) => {
    //         if(users.hasOwnProperty(field)) {
    //             newUsers[field] = users[field];
    //         }
    //         return newUsers;
    //     }, {});
    //     // console.log(newUsers)
    //     return newUsers;
    // }

    // static getUsers(isAll, ...fields) {
    // }

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;"
            db.query(query, [id], (err, data) => {
                if (err) reject(err);
                // console.log(data[0]);
                else resolve(data[0]);
            });        
        });
    }


    static async save(userInfo) {
       return new Promise((resolve, reject) => {
            const query = "INSERT INTO users (id, name, pw) VALUES(?,?,?)"
            db.query(query, [userInfo.id, userInfo.name, userInfo.pw] , (err) => {
                if (err) reject(`${err}`);
                else resolve({ success: true }, userInfo);
            });        
        });
    }
}

module.exports = UserStorage;