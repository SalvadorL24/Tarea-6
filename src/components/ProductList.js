const ProductList = ({ products, favorites, onAddToCart, onToggleFavorite }) => {
    return (
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    );
  };
  
  window.ProductList = ProductList;