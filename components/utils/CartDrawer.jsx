"use client";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";
import { useEffect } from "react";
import Image from "next/image";

const CartDrawer = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    handleCloseCart,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  const closeDrawer = () => {
    handleCloseCart();
    const drawerCheckbox = document.getElementById("my-drawer-1");
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  async function handleCheckoutClick(event) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("result");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const drawerCheckbox = document.getElementById("my-drawer-1");
    if (shouldDisplayCart) {
      drawerCheckbox.checked = true;
    } else {
      drawerCheckbox.checked = false;
    }
  }, [shouldDisplayCart]);

  return (
    <div className="drawer drawer-end z-20">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-none border-none">
        {/* Page content here */}
        <label htmlFor="my-drawer-1" className="drawer-button">
          <FaShoppingCart className="hover:cursor-pointer text-2xl hover:text-accent transition-all duration-300 lg:text-xl" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={() => {
            closeDrawer();
          }}
        ></label>
        <ul className="menu bg-neutral-800 min-h-full w-80 p-4 text-neutral-content">
          {/* Sidebar content here */}
          <li className="flex flex-row justify-between">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button
              className="text-2xl drawer-open"
              aria-label="close sidebar"
              onClick={() => {
                closeDrawer();
              }}
            >
              <FaTimes />
            </button>
          </li>
          {cartCount > 0 ? (
            <>
              {Object.values(cartDetails ?? {}).map((entry) => (
                <li key={entry.id}>
                  <div className="flex flex-row w-full">
                    <div className="">
                      <Image
                        src={entry.image}
                        alt="Product"
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex gap-x-2 w-full justify-between">
                      <div>
                        <p>{entry.name}</p>
                        <p>${entry.price}</p>
                      </div>
                      <div className="">
                        <p>Qty: {entry.quantity}</p>
                        <button
                          className="text-red-400 hover:text-red-300 transition-all duration-300"
                          onClick={() => removeItem(entry.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              <li className="flex flex-row justify-between">
                <p>Total:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </li>
              <div className="w-full text-center mt-5 h-[40px]">
                <button
                  onClick={handleCheckoutClick}
                  className="bg-accent w-full h-full text-accent-content font-medium text-xs hover:opacity-70 transition-all duration-300"
                >
                  Checkout
                </button>
              </div>
            </>
          ) : (
            <li>
              <p>Your cart is empty</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CartDrawer;
