const App = () => {
    const [products] = React.useState([
        { 
          id: 1, 
          name: "iPhone 11", 
          price: 450, 
          category: "Apple", 
          isFavorite: false, 
          image: "images/iphone11.jpg"  // Ruta para GitHub
        },
        { 
          id: 2, 
          name: "Samsung S20", 
          price: 500, 
          category: "Samsung", 
          isFavorite: false, 
          image: "images/Samsung-s20.jpg" 
        },
        { 
          id: 3, 
          name: "Google Pixel 5", 
          price: 400, 
          category: "Google", 
          isFavorite: false, 
          image: "images/pixel5.jpg" 
        },
        { 
          id: 4, 
          name: "iPhone 15", 
          price: 750, 
          category: "Apple", 
          isFavorite: false, 
          image: "images/iPhone15.jpg" 
        },
        { 
          id: 5, 
          name: "SAMSUNG GALAXY A55", 
          price: 650, 
          category: "Samsung", 
          isFavorite: false, 
          image: "images/Galaxy A55.webp" 
        },
        { 
          id: 6, 
          name: "Celular Honor X5", 
          price: 550, 
          category: "Apple", 
          isFavorite: false, 
          image: "images/HonorX5.webp " 
        },
        { 
          id: 7, 
          name: "Xiaomi redmi 13", 
          price: 350, 
          category: "Google", 
          isFavorite: false, 
          image: "images/Xiaomi.webp" 
        },
        { 
          id: 8, 
          name: "Motorola edge 50", 
          price: 950, 
          category: "Google", 
          isFavorite: false, 
          image: "images/motorola.jpg" 
        },
      ]);
  
    const [cart, setCart] = React.useState([]);
    const [favorites, setFavorites] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState("Todos");
  
    const categories = ["Todos", ...new Set(products.map(p => p.category))];
    const filteredProducts = selectedCategory === "Todos" 
      ? products 
      : products.filter(p => p.category === selectedCategory);
  
    const addToCart = (product) => {
      setCart([...cart, product]);
    };
  
    const removeFromCart = (productId) => {
      setCart(cart.filter(item => item.id !== productId));
    };
  
    const toggleFavorite = (productId) => {
      setFavorites(
        favorites.includes(productId)
          ? favorites.filter(id => id !== productId)
          : [...favorites, productId]
      );
    };
  
    return (
      <div className="app">
        <Header cartCount={cart.length} favoritesCount={favorites.length} />
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <ProductList 
          products={filteredProducts}
          favorites={favorites}
          onAddToCart={addToCart}
          onToggleFavorite={toggleFavorite}
        />
        <Cart items={cart} onRemove={removeFromCart} />
      </div>
    );
  };
  
  window.App = App;