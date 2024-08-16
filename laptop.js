import React from 'react';
import './laptop.css';
import { navbar } from './nav';

const LaptopStore = () => {
  return (
    <div>
      <header>
       {navbar}
      </header>

      <main className="product-grid">
        <div className="product-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHhid8-5NLulVzT0ybCe-so4SZQGnScCAgsQ&s"
            alt="Laptop 1"
          />
          <h2>Laptop 1</h2>
          <p>High-performance laptop for gaming and work.</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img
            src="data:image/jpeg;base64,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"
            alt="Laptop 2"
          />
          <h2>Laptop 2</h2>
          <p>Lightweight laptop with long battery life.</p>
          <button>Add to Cart</button>
        </div>
        <div className="product-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Iu2OTgfDII7d4T6RQnxv-jWTsIf6D3Xqeg&usqp=CAU"
            alt="Laptop 3"
          />
          <h2>Laptop 3</h2>
          <p>Business laptop with top-notch security features.</p>
          <button>Add to Cart</button>
        </div>
      </main>

      <footer>
        <p>&copy; 2024 Laptop Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LaptopStore;
