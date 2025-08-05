import React, { useState, useEffect, useRef } from "react";
import logo from "./../assets/Panto.png";
import { Menu, ShoppingBasket, X, ChevronDown, Minus, Plus } from "lucide-react";

const Navbar = ({
  cartCount = 0,
  cartItems = [],
  deleteFromCart,
  removeFromCart,
  addToCart,
}) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cartRef = useRef(null);

  const toggleNavbar = () => setHamburgerOpen(!hamburgerOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    {
      title: "Furniture",
      dropdown: ["Chairs", "Tables", "Sofas"],
    },
    { title: "Shop" },
    { title: "About Us" },
    { title: "Contact" },
  ];

  return (
    <nav
      className={`text-white px-4 py-4 fixed w-full top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Panto Logo" className="h-10" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 relative">
          {items.map((item, index) => (
            <li key={index} className="group relative">
              {item.dropdown ? (
                <div className="flex items-center gap-1 cursor-pointer">
                  <span className="text-[18px]">{item.title}</span>
                  <ChevronDown size={16} />
                </div>
              ) : (
                <a
                  href="#"
                  className="text-[18px] hover:text-gray-400 transition"
                >
                  {item.title}
                </a>
              )}

              {item.dropdown && (
                <ul className="absolute left-0 top-full mt-2 bg-gray-900 text-sm rounded-md shadow-md invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 min-w-[150px]">
                  {item.dropdown.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-800 hover:rounded-md whitespace-nowrap"
                      >
                        {subItem}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4 relative">
          <div
            ref={cartRef}
            className="relative cursor-pointer"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <ShoppingBasket />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}

            {/* Cart Dropdown */}
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white text-black rounded-md shadow-lg z-50">
                <div className="p-4 max-h-60 overflow-y-auto">
                  {cartItems.length === 0 ? (
                    <p className="text-center text-sm text-gray-500">
                      Cart is empty
                    </p>
                  ) : (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex justify-between items-center mb-4"
                      >
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            {item.quantity} × ${item.price}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          {/* Quantity controls */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFromCart(item.id);
                            }}
                            className="bg-gray-200 text-gray-800 p-1 rounded-full hover:bg-gray-300"
                            aria-label={`Decrease quantity of ${item.name}`}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="text-sm">{item.quantity}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(item);
                            }}
                            className="bg-gray-200 text-gray-800 p-1 rounded-full hover:bg-gray-300"
                            aria-label={`Increase quantity of ${item.name}`}
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {cartItems.length > 0 && (
                  <div className="border-t px-4 py-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>
                      $
                      {cartItems
                        .reduce(
                          (sum, item) => sum + item.quantity * item.price,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleNavbar}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {hamburgerOpen ? (
              <X className="cursor-pointer" />
            ) : (
              <Menu className="cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {hamburgerOpen && (
        <div className="md:hidden mt-4 bg-gray-900 py-4 h-screen cursor-pointer">
          <ul className="flex flex-col items-center gap-4">
            {items.map((item, index) => (
              <li key={index} className="w-full text-center">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={toggleDropdown}
                      className="flex justify-center items-center w-full gap-1"
                    >
                      {item.title}
                      <ChevronDown size={16} />
                    </button>
                    {dropdownOpen && (
                      <ul className="bg-gray-800 rounded-md mt-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href="#"
                              className="block px-4 py-2 text-white hover:bg-gray-700"
                            >
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a
                    href="#"
                    className="text-[18px] hover:text-gray-400 transition block"
                  >
                    {item.title}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
