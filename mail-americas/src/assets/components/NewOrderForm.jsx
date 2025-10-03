import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewOrderForm({ addOrder }) {
  const [customer, setCustomer] = useState('');
  const [items, setItems] = useState([{ productId: '', name: '', quantity: 0, price: 0 }]);
  const [status, setStatus] = useState('pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customer && items.every(item => item.name && item.quantity > 0 && item.price > 0)) {
      addOrder({
        id: Date.now(),
        customer,
        items,
        status,
        date: new Date(),
      });
      setCustomer('');
      setItems([{ productId: '', name: '', quantity: 0, price: 0 }]);
    } else {
      alert('Please fill out all fields correctly.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Agregar Nueva Orden</h3>
      <label>
        Cliente:
        <input type="text" value={customer} onChange={(e) => setCustomer(e.target.value)} required />
      </label>
      {items.map((item, index) => (
        <div key={index}>
          <h4>Item {index + 1}</h4>
          <label>
            Producto:
            <input
              type="text"
              value={item.name}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].name = e.target.value;
                setItems(newItems);
              }}
              required
            />
          </label>
          <label>
            Cantidad:
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].quantity = parseInt(e.target.value, 10);
                setItems(newItems);
              }}
              min="1"
              required
            />
          </label>
          <label>
            Precio:
            <input
              type="number"
              value={item.price}
              onChange={(e) => {
                const newItems = [...items];
                newItems[index].price = parseFloat(e.target.value);
                setItems(newItems);
              }}
              required
            />
          </label>
        </div>
      ))}
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
}

NewOrderForm.propTypes = {
  addOrder: PropTypes.func.isRequired,
};

export default NewOrderForm;
