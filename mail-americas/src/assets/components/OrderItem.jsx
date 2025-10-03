import React from 'react';
import PropTypes from 'prop-types';

function OrderItem({ id, customer, items, status, date }) {
  return (
    <div className="order-item">
      <h3>Order ID: {id}</h3>
      <p>Customer: {customer}</p>
      <p>Status: {status}</p>
      <p>Date: {date.toLocaleDateString()}</p>
      <h4>Items:</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} (x{item.quantity}) - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

OrderItem.propTypes = {
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
};

export default OrderItem;
