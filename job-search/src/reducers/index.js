import { initialState } from "../store"


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM_TO_INGRID_ONCKEN":
            return {
                // ...state,
                favCompanies: {
                    ...state.favCompanies,
                    companies: [...state.favCompanies, action.payload],
                },
            }
        case "REMOVE_ITEM_TO_INGRID_ONCKEN":
            return {
                // ...state,
                favCompanies: {
                    ...state.favCompanies,
                    companies: state.favCompanies.companies.filter((firma, i) => i !== action.payload)
                }
            }
        default:
            return state
    }
}
export default mainReducer