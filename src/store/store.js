import { createStore, combineReducers, applyMiddleware} from 'redux';
import customerReducer from "./reducers/customer";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    customerInfo: customerReducer,
//    reducers will added here for future pupose
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;