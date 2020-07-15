import React from 'react';
import './CustomerAddress.css';

const CustomerAddress = (props) => {
const {selCustomerAddress} = props;
    let addressUI = <div className='help-msg'>Please select a Customer to View his address</div>;
    if (selCustomerAddress.length > 0) {
        addressUI = (<div className='address-list'>{selCustomerAddress.map(addr => (<div className='address-card'>
                <div>{addr.houseNo}</div>
                <div>{addr.streetName}</div>
                <div>{addr.city}</div>
                <div>{addr.state}</div>
                <div>{addr.pincode}</div>
            </div>)
        )}
        </div>);
    }

    return (<>{addressUI}</>)

}

export default React.memo(CustomerAddress);