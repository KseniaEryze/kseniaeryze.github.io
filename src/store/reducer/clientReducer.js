import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        name: 'Client 1',
        inboxMessages: ['Inbox message 1', 'Inbox message 2'],
        sentMessages: ['Sent message 1', 'Sent message 2'],
        favoriteMessages: ['Favorite message 1', 'Favorite message 2'],
        draftMessages: ['Draft message 1', 'Draft message 2'],
    },
    {
        id: 2,
        name: 'Client 2',
        inboxMessages: ['Inbox message 3', 'Inbox message 4'],
        sentMessages: ['Sent message 3', 'Sent message 4'],
        favoriteMessages: ['Favorite message 3', 'Favorite message 4'],
        draftMessages: ['Draft message 3', 'Draft message 4'],
    },
];

const clientSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        addClient: (state, action) => {
            state.push(action.payload);
        },
        updateClient: (state, action) => {
            const { id, updates } = action.payload;
            const client = state.find((client) => client.id === id);
            if (client) {
                Object.assign(client, updates);
            }
        },
        deleteClient: (state, action) => {
            return state.filter((client) => client.id !== action.payload);
        },
    },
});

export const { addClient, updateClient, deleteClient } = clientSlice.actions;

export default clientSlice.reducer;