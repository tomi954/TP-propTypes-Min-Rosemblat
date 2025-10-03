import React, { useState } from 'react';
import OrderList from './OrderList';
import OrderFilter from './OrderFilter';
import OrderStats from './OrderStats';
import NewOrderForm from './NewOrderForm';

// Elimina el array inicial de pedidos de ejemplo
const initialOrders = [];

function Dashboard() {
  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState('all');

  const addOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  const filteredOrders = filter === 'all' ? orders : orders.filter(order => order.status === filter);

  return (
    <div className="dashboard-container">
      <h1>TP propTypes</h1>
      <OrderFilter filter={filter} setFilter={setFilter} />
      <OrderStats orders={orders} />
      <OrderList orders={filteredOrders} />
      <NewOrderForm addOrder={addOrder} />
    </div>
  );
}

export default Dashboard;
