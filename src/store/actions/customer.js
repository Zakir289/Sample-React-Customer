import axios from '../../axios-customer';
import {FETCH_CUSTOMER_SUCCESS, FETCH_CUSTOMER_ADDRESS, FETCH_REQUEST_START} from './actionTypes';


const fetchCustomerSuccess = (customerData) => {
    return {
        type: FETCH_CUSTOMER_SUCCESS,
        payload: customerData
    }
}

const fetchCustomerAddrSuccess = (customerAddress) => {
    return {
        type: FETCH_CUSTOMER_ADDRESS,
        payload: customerAddress
    }
}

const fetchRequestStart = () => {
    return {
        type: FETCH_REQUEST_START
    }
}

export const fetchCustomerAddress = (customerId) => {
    return async dispatch => {
        try {
            dispatch(fetchRequestStart());
            const response = await axios.get('/customers/'+customerId+'.json');
            const {address} = response.data;
            dispatch(fetchCustomerAddrSuccess(address));
        } catch (error) {
            console.log(error);
        }
    }

}

export const fetchCustomers = () => {
    return async dispatch => {
        try {
            dispatch(fetchRequestStart());
            const customerData = [];
            const response = await axios.get('/customers.json');
            const {data} = response;
            for (let key in data) {
                customerData.push({...data[key], id: key});
            }
            dispatch(fetchCustomerSuccess(customerData));
        } catch (error) {
            console.log(error);
        }
    }
}

export default fetchCustomers;