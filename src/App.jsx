import React, { useState } from 'react';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import DishList from './components/DishList';
import DeliveryForm from './components/DeliveryForm';

const initialMenu = [
  { id: 'd1', name: 'Doro Wot', price: 450, spicy: true, category: 'Traditional' },
  { id: 'd2', name: 'Kitfo', price: 500, spicy: true, category: 'Traditional' },
  { id: 'd3', name: 'Shiro Wot', price: 200, spicy: false, category: 'Vegetarian' },
  { id: 'd4', name: 'Veggie Combo (Beyaynetu)', price: 250, spicy: false, category: 'Vegetarian' },
  { id: 'd5', name: 'Tibs', price: 400, spicy: false, category: 'Traditional' },
  { id: 'd6', name: 'Spris Juice', price: 80, spicy: false, category: 'Beverages' }
];

const categories = ['All', 'Traditional', 'Vegetarian', 'Beverages'];

export function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (price) => {
    setTotalPrice(prevTotal => prevTotal + price);
  };

  const filteredDishes = selectedCategory === 'All'
    ? initialMenu
    : initialMenu.filter(dish => dish.category === selectedCategory);

  return (
    <main style={{ maxWidth: '500px', margin: '30px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <Header />

      <div style={{
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        marginBottom: '16px',
        borderBottom: '1px solid #eee',
        paddingBottom: '10px'
      }}>
        <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Menu Options</h2>
        <div>
          <span style={{ fontSize: '0.85rem', color: '#666', display: 'block' }}>Running Total</span>
          <strong style={{ fontSize: '1.2rem', color: '#28a745' }}>{totalPrice} ETB</strong>
        </div>
      </div>

      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <DishList
        dishes={filteredDishes}
        onAddToCart={handleAddToCart}
      />

      <DeliveryForm totalOrderPrice={totalPrice} />
    </main>
  );
}

export default App;
