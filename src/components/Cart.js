const Cart = ({ items, onRemove }) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
  
    return (
      <div className="cart">
        <h2>Tu Carrito ({items.length})</h2>
        {items.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <div>
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <div>
                  <span>${item.price}</span>
                  <button 
                    className="remove-item"
                    onClick={() => onRemove(item.id)}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
            <div className="total">Total: ${total}</div>
          </div>
        )}
      </div>
    );
  };
  
  window.Cart = Cart; // ¡Esta línea es crucial!