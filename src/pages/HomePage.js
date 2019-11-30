import React from "react";
import { ProductConsumer } from '../context/'
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Services from '../components/HomePage/Services'
import Featured from '../components/HomePage/Featured'

export default function HomePage() {
  return (
    <>
      <Hero max title="awesome gadgets">
        <Link to="/products" className="main-link" style={{marginTop:'var(--margin-top-large)'}}>all products</Link>
    </Hero>
    <Services />
      <Featured />
    </>
  );
}
