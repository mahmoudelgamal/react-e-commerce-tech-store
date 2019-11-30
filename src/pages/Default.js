import React from "react";
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import imgBcg from '../images/defaultBcg.jpeg'

export default function Default() {
  return (
    <>
      <Hero max img={imgBcg} title="404">
        <h1 className="text-uppercase">page not found</h1>
        <Link to="/" className="main-link" style={{marginTop:'var(--margin-top-large)'}}>return home</Link>
      </Hero>
    </>
  ); 
}
