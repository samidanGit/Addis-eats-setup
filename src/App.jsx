import React from 'react';
import Header from './Header';
import Dish from './Dish';

// Static array of dishes with unique keys
const dishes = [
  { id: 'd1', name: 'Doro Wot', price: 450 },
  { id: 'd2', name: 'Kitfo', price: 500 },
  { id: 'd3', name: 'Shiro Wot', price: 200 },
  { id: 'd4', name: 'Veggie Combo (Beyaynetu)', price: 250 },
  { id: 'd5', name: 'Tibs', price: 400 },
];

export function App() {
  return (
    <main style={{ maxWidth: '480px', margin: '30px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      <Header />
      
      <section>
        {dishes.map((dish) => (
          <Dish
            key={dish.id} // Stable unique key
            name={dish.name}
            price={dish.price}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
