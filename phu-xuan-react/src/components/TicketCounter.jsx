import { useState } from 'react';

function TicketCounter({ price }) {
  const [quantity, setQuantity] = useState(1);

  function handleDecrease() {
    setQuantity((prev) => Math.max(1, prev - 1));
  }

  function handleIncrease() {
    setQuantity((prev) => Math.min(10, prev + 1));
  }

  const totalPrice = price * quantity;

  return (
    <div className="ticket-counter">
      <div className="ticket-counter__controls">
        <button className="ticket-counter__btn" onClick={handleDecrease}>−</button>
        <span className="ticket-counter__qty">{quantity}</span>
        <button className="ticket-counter__btn" onClick={handleIncrease}>+</button>
      </div>
      <p className="ticket-counter__total">
        Tổng tiền: <strong>{totalPrice.toLocaleString('vi-VN')} đ</strong>
      </p>
    </div>
  );
}

export default TicketCounter;
