export const SET_CLIENTS = 'SET_CLIENTS';
export const ADD_CLIENT_MESSAGE = 'ADD_CLIENT_MESSAGE';

export const setClients = (clients) => ({
    type: SET_CLIENTS,
    payload: clients,
});

export const addClientMessage = (clientId, message) => ({
    type: ADD_CLIENT_MESSAGE,
    payload: { clientId, message },
});