import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Minus, Plus } from "lucide-react";

const categories = ["Chair", "Beds", "Sofa", "Lamp"];

const BestSellingProduct = ({ addToCart, removeFromCart, cartItems }) => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Chair");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/bestSellingProductsFake.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load products:", err);
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Get quantity of product in cart (0 if none)
  const getQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <>
      <style>{`
        @media (max-width: 1023px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }
        }
        @media (min-width: 1024px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: block !important;
          }
        }
      `}</style>

      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Best Selling Product
          </h2>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-10">
            <div className="bg-gray-300 rounded-full px-1 py-1">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => handleCategoryChange(item)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
                    activeCategory === item
                      ? "bg-white text-black"
                      : "text-black hover:bg-gray-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Product Slider */}
          {loading ? (
            <p className="text-gray-500">Loading products...</p>
          ) : filteredProducts.length === 0 ? (
            <p className="text-gray-500">No products found in this category.</p>
          ) : (
            <Swiper
              spaceBetween={30}
              navigation
              modules={[Navigation]}
              className="px-6"
              breakpoints={{
                340: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {filteredProducts.map((product) => {
                const quantity = getQuantity(product.id);
                return (
                  <SwiperSlide key={product.id} className="min-w-0">
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:scale-[1.02] transition duration-300 p-4 flex flex-col items-center text-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-36 h-36 object-contain mb-4"
                      />
                      <p className="text-sm text-gray-400 mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-semibold mb-2">{product.name}</h3>

                      {/* Star Ratings */}
                      {product.rating && (
                        <div className="flex justify-center mb-2">
                          {Array.from({ length: product.rating }).map((_, i) => (
                            <span key={i} className="text-yellow-400 text-sm">
                              ★
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Price and Quantity Controls */}
                      <div className="flex items-center justify-between w-full px-2">
                        <p className="text-lg font-bold text-gray-800">
                          ${product.price}
                        </p>
                        <div className="flex gap-2 items-center">
                          {quantity > 0 && (
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
                              aria-label={`Decrease quantity of ${product.name}`}
                            >
                              <Minus size={18} />
                            </button>
                          )}
                          <span className="text-base font-medium min-w-[20px] text-gray-800">
                            {quantity}
                          </span>
                          <button
                            onClick={() => addToCart(product)}
                            className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
                            aria-label={`Increase quantity of ${product.name}`}
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}

          {/* View All Button */}
          <div className="mt-10">
            <button className="text-orange-500 hover:underline text-sm font-medium">
              View All →
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellingProduct;
