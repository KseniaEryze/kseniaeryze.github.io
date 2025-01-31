// actions/portfolioActions.js
export const ADD_PORTFOLIO_ITEM = 'ADD_PORTFOLIO_ITEM';
export const EDIT_PORTFOLIO_ITEM = 'EDIT_PORTFOLIO_ITEM';
export const REMOVE_PORTFOLIO_ITEM = 'REMOVE_PORTFOLIO_ITEM';

export const addPortfolioItem = (item) => ({
    type: ADD_PORTFOLIO_ITEM,
    payload: item,
});

export const editPortfolioItem = (index, item) => ({
    type: EDIT_PORTFOLIO_ITEM,
    payload: { index, item },
});

export const removePortfolioItem = (index) => ({
    type: REMOVE_PORTFOLIO_ITEM,
    payload: index,
});