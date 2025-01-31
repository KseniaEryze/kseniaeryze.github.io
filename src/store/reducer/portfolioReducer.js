import { ADD_PORTFOLIO_ITEM, EDIT_PORTFOLIO_ITEM, REMOVE_PORTFOLIO_ITEM } from '../action/portfolioActions';

const initialState = {
    items: [
        'https://via.placeholder.com/156x156.png?text=Portfolio+1',
        'https://via.placeholder.com/156x156.png?text=Portfolio+2',
        'https://via.placeholder.com/156x156.png?text=Portfolio+3'
    ]
};

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PORTFOLIO_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        case EDIT_PORTFOLIO_ITEM:
            const newItems = [...state.items];
            newItems[action.payload.index] = action.payload.item;
            return {
                ...state,
                items: newItems,
            };
        case REMOVE_PORTFOLIO_ITEM:
            return {
                ...state,
                items: state.items.filter((_, index) => index !== action.payload),
            };
        default:
            return state;
    }
};

export default portfolioReducer;