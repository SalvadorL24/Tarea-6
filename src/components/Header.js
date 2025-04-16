const Header = ({ cartCount, favoritesCount }) => {
    return (
      <header className="header">
        <h1>📱 Celulares Usados Premium</h1>
        <div className="header-actions">
          <span className="fav-counter">❤️ {favoritesCount}</span>
          <span className="cart-counter">🛒 {cartCount}</span>
        </div>
      </header>
    );
  };
  
  window.Header = Header;