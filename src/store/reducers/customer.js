import {FETCH_CUSTOMER_ADDRESS, FETCH_CUSTOMER_SUCCESS, FETCH_REQUEST_START} from "./../actions/actionTypes";

const initialState = {
    customers: [],
    selCustomerAddress: [],
    loading: false
};

const customerReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CUSTOMER_SUCCESS:
            return {
                ...state,
                customers: action.payload,
                loading: false
            }
        case FETCH_CUSTOMER_ADDRESS:
            return {
                ...state,
                selCustomerAddress: action.payload,
                loading: false
            }
        case FETCH_REQUEST_START:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}


export default customerReducer;