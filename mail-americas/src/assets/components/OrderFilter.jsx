import React from 'react';
import PropTypes from 'prop-types';

function OrderFilter({ filter, setFilter }) {
  return (
    <div>
      <h3>Filtro</h3>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
      </select>
    </div>
  );
}

OrderFilter.propTypes = {
  filter: PropTypes.oneOf(['all', 'pending', 'shipped', 'delivered']).isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default OrderFilter;
