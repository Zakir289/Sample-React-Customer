import React, {useCallback} from 'react';
import {fetchCustomerAddress} from "../../store/actions/customer";
import {useDispatch} from "react-redux";

import './Customer.css';

const Customer = (props) => {
    const dispatch = useDispatch();
    const {id, name, Age} = props.data;
    const handleCustomer = useCallback((customerId) => {
        return () => {
            dispatch(fetchCustomerAddress(customerId));
        }
    }, [dispatch]);

    return (<div className="customer-basic-details" onClick={handleCustomer(id)}>{name}({Age})</div>);
}

export default React.memo(Customer);