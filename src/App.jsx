import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {data.map(entry => {
          return (<Card
            key={entry.id}
            {...entry} />);
        })}
      </section>
    </div>
  )
}