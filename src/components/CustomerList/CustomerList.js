import React from 'react';
import Customer from "./../Customer/Customer";

const CustomerList = (props) => {
    const { customers } = props;
    let customerList = <div>No Customers</div>;
    if(customers.length > 0){
       customerList= customers.map(customer =>  (<Customer
                    key={customer.id}
                    data={customer}
                />))
            }
    return (<>{customerList}</>);
}
export default React.memo(CustomerList);