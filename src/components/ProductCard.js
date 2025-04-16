const ProductCard = ({ product, isFavorite, onAddToCart, onToggleFavorite }) => {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="category">{product.category}</p>
          <p className="price">${product.price}</p>
          <div className="product-actions">
            <button 
              className="btn btn-primary"
              onClick={() => onAddToCart(product)}
            >
              Agregar
            </button>
            <button
              className="btn btn-outline"
              onClick={() => onToggleFavorite(product.id)}
            >
              {isFavorite ? "❤️ Quitar" : "🤍 Favorito"}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  window.ProductCard = ProductCard;