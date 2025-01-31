import { SET_CLIENTS, ADD_CLIENT_MESSAGE } from '../../store/action/clientAction';

const initialState = {
    clients: [],
};

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CLIENTS:
            return {
                ...state,
                clients: action.payload,
            };
        case ADD_CLIENT_MESSAGE:
            const { clientId, message } = action.payload;
            return {
                ...state,
                clients: state.clients.map((client) =>
                    client.id === clientId
                        ? { ...client, messages: [...client.messages, message] }
                        : client
                ),
            };
        default:
            return state;
    }
};

export default clientReducer;