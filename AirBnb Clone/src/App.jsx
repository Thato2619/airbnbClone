import React from 'react';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import data from './data';
import './App.css';

export default function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
})        
 
  return (
   <div>
     <Navbar />
      <Hero />
      {cards}
   </div>
  )
}


