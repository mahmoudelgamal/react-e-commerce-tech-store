import React from "react";
import Hero from '../components/Hero'
import Info from '../components/AboutPage/Info';
import imgBcg from '../images/aboutBcg.jpeg'
export default function AboutPage() {
  return (
    <>
      <Hero img={imgBcg}/>
      <Info></Info>
    </>
  );
}
