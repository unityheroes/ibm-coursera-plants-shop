import { FaShoppingCart } from "react-icons/fa";

function Navigation({ currentPage, setCurrentPage, getCartItemsCount, handleHomeClick }) {
  return (
    <div className="navbar">
      <div className="tag">
        <div className="luxury">
          <img 
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" 
            alt="Paradise Nursery Logo" 
          />
          <a href="/" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>
            <div>
              <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
              <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>
      </div>
      <div className="nav_links">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentPage('products'); }}
          className={currentPage === 'products' ? 'active' : ''}
        >
          Plants
        </a>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentPage('cart'); }}
          className={currentPage === 'cart' ? 'active cart-link' : 'cart-link'}
        >
          <FaShoppingCart size={22} />
          <span className="cart-count">{getCartItemsCount()}</span>
        </a>
      </div>
    </div>
  );
}

export default Navigation;
