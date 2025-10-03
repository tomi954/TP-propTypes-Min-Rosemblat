import React from 'react';
import PropTypes from 'prop-types';
import OrderItem from './OrderItem';

function OrderList({ orders }) {
  return (
    <div>
      <h2>Orders List</h2>
      {orders.length === 0 ? (
        <p>No orders to display</p>
      ) : (
        orders.map((order) => <OrderItem key={order.id} {...order} />)
      )}
    </div>
  );
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customer: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          productId: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          quantity: PropTypes.number.isRequired,
          price: PropTypes.number.isRequired,
        })
      ).isRequired,
      status: PropTypes.oneOf(['pending', 'shipped', 'delivered']).isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
};

export default OrderList;
