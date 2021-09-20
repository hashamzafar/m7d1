





export const addToFavoritesAction = (companyToAdd) => {
    return ({
        type: 'ADD_ITEM_TO_INGRID_ONCKEN',
        payload: companyToAdd
    })
}

export const removeToFavoritesAction = (index) => {
    return ({
        type: 'REMOVE_ITEM_TO_INGRID_ONCKEN',
        payload: index
    })
}







