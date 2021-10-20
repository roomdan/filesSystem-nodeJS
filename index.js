//Imports de los módulos
//fs y path

const fs = require('fs');
const fsp = require('fs').promises;

const getUsers = async () => {
    try {
        const getData = await fsp.readFile('users.json', { encoding: 'utf8' });
        return getData
    }
    catch (error) {
        console.log(error)
    }
};

const addUser = async (userObj) => {

    let data;

    data = await getUsers();
    data = JSON.parse(data)
    data = [...data, userObj]
    data = JSON.stringify(data)

    try {
        await fsp.writeFile('users.json', data);
        console.trace('A new user was added');
    }
    catch {
        console.error('This operation had an error')
    }

};
//TYPE USER
class UserData {
    constructor(name, lastName, email, password) {
        this.name = name,
            this.lastName = lastName,
            this.email = email,
            this.password = password
    }
}

const user = new UserData('daniel', 'cubillos', 'danielfcramos@gmail.com', 'soyDanielWbdv')

addUser(user)

const clearUsers = async () => {
    let data = []
    data = JSON.stringify(data)
    try {
        await fsp.writeFile('users.json', data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getUsers,
    addUser,
    clearUsers,
};
