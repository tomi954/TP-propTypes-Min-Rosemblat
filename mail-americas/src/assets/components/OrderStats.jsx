import React from 'react';
import PropTypes from 'prop-types';

function OrderStats({ orders }) {
  const total = orders.length;
  const pending = orders.filter(order => order.status === 'pending').length;
  const shipped = orders.filter(order => order.status === 'shipped').length;
  const delivered = orders.filter(order => order.status === 'delivered').length;

  return (
    <div>
      <h3>Order Statistics</h3>
      <p>Total Orders: {total}</p>
      <p>Pending: {pending}</p>
      <p>Shipped: {shipped}</p>
      <p>Delivered: {delivered}</p>
    </div>
  );
}

OrderStats.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      customer: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired,
      status: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
};

export default OrderStats;
