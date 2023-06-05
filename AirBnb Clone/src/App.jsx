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
            item={item}
        />
    )
})        
 
  return (
   <div>
     <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
      
   </div>
  )
}


