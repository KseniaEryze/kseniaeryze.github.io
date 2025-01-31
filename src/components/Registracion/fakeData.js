import { login } from "../../store/action/userAction";

const fakeUsers = [
    {
        id: 1,
        login: 'master',
        password: 'master',
        role: 'master',
    },
     {
        id: 2,
        login: 'master2',
        password: 'master2',
        role: 'master',
    },
    {
        id: 2,
        login: 'teacher',
        password: 'teacher',
        role: 'teacher',
    },
    {
        id: 3,
        login: 'student',
        password: 'student',
        role: 'student',
    },
    {
        id: 4,
        login: 'account-manager',
        password: 'account-manager',
        role: 'account-manager',

    }
];

 
export const addUser = (newUser) => {

    const cleanedUsername = newUser.login;
    const userExists = fakeUsers.some(user => user.login === cleanedUsername);
    if (userExists) {
        throw new Error('Пользователь с таким именем уже существует!');
    }

    newUser.id = fakeUsers.length + 1;
    fakeUsers.push(newUser)
}

export const getUsers = () => {
    return fakeUsers
}

export const findUsers = (login, password) => {
    return fakeUsers.find(u => u.login === login && u.password === password);
}
export default fakeUsers;