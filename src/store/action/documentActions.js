export const ADD_DOCUMENT_ITEM = 'ADD_DOCUMENT_ITEM';
export const EDIT_DOCUMENT_ITEM = 'EDIT_DOCUMENT_ITEM';
export const REMOVE_DOCUMENT_ITEM = 'REMOVE_DOCUMENT_ITEM';

export const addDocumentItem = (item) => ({
    type: ADD_DOCUMENT_ITEM,
    payload: item,
});

export const editDocumentItem = (index, item) => ({
    type: EDIT_DOCUMENT_ITEM,
    payload: { index, item },
});

export const removeDocumentItem = (index) => ({
    type: REMOVE_DOCUMENT_ITEM,
    payload: index,
});