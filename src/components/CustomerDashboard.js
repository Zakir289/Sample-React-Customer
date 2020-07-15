import React, {useEffect} from 'react';
import {fetchCustomers} from '../store/actions/customer';
import {useDispatch, useSelector} from 'react-redux';
import CustomerList from './CustomerList/CustomerList';
import CustomerAddress from './CustomerAddress/CustomerAddress';
import './CustomerDashboard.css';
import './../App.css';
import Loader from "./UI/Loader";

const CustomerDashboard = () => {
    const dispatch = useDispatch();
    const customers = useSelector(state => state.customerInfo.customers);
    const {selCustomerAddress, loading} = useSelector(state => state.customerInfo);

    useEffect(() => {
        dispatch(fetchCustomers());
    }, [dispatch]);


        return(<>
            {loading && <Loader/>}
            <div className='dashbaord-heading'>Customer Dashboard</div>
            <div className='dashboard-container'>
                <div className='customers-list'> <CustomerList customers = {customers}/></div>
                <div className='customers-address'><CustomerAddress selCustomerAddress = {selCustomerAddress}/></div>
            </div>
        </>);
    }


export default CustomerDashboard;