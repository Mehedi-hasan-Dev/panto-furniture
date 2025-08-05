import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Banner from "./Components/Banner";
import BestSellingProduct from "./Components/BestSellingProduct";
import useCart from "./hooks/useCart";
import ExperienceSection from "./Components/ExperienceSection";
import MaterialsSection from "./Components/MaterialsSection";
import Footer from "./Components/Footer";
import TestimonialSlider from "./Components/TestimonialSlider";

function App() {
  const {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    deleteFromCart,
    removeMultipleFromCart,
  } = useCart();

  return (
    <>
      <Navbar
        cartCount={cartCount}
        cartItems={cartItems}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        deleteFromCart={deleteFromCart}
      />
      <Banner />
      <About />
      <BestSellingProduct
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cartItems={cartItems}
      />
      <ExperienceSection />
      <MaterialsSection />
      <TestimonialSlider />
      <Footer />
    </>
  );
}

export default App;
