// reducers/documentReducer.js
import { ADD_DOCUMENT_ITEM, EDIT_DOCUMENT_ITEM, REMOVE_DOCUMENT_ITEM } from '../../store/action/documentActions';

const initialState = {
    items: [
        'https://via.placeholder.com/156x156.png?text=Portfolio+1',
        'https://via.placeholder.com/156x156.png?text=Portfolio+2',
        'https://via.placeholder.com/156x156.png?text=Portfolio+3'
    ]
};

const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DOCUMENT_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case EDIT_DOCUMENT_ITEM:
            const newItems = [...state.items];
            newItems[action.payload.index] = action.payload.item;
            return {
                ...state,
                items: newItems,
            };
        case REMOVE_DOCUMENT_ITEM:
            return {
                ...state,
                items: state.items.filter((_, index) => index !== action.payload),
            };
        default:
            return state;
    }
};

export default documentReducer;