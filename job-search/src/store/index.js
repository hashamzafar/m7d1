import { createStore } from "redux"
import mainReducer from "../reducers"



export const initialState = {
    favCompanies: {
        companies: [],
    },
    user: {
        firstName: '',
    },
}

const configureStore = createStore(
    mainReducer,
    initialState,
    process.env.REACT_APP_DEVELOPMENT && window.REDUX_DEVTOOLS_EXTENSION()
)
export default configureStore