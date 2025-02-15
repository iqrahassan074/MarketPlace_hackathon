"use client";

import { Product } from "../../../types/Products";
import React, { useEffect, useState } from "react";
import { getCartItems, removeFromCart, updateCartQuantity } from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image"; 

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discountCode, setDiscountCode] = useState<string>("");
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [freeShippingProgress, setFreeShippingProgress] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    const items = getCartItems().map((item) => ({
      ...item,
      price: item.price || 0,
    }));
    setCartItems(items);
    updateFreeShippingProgress(items);
  }, []);

  useEffect(() => {
    updateFreeShippingProgress(cartItems); 
  }, [cartItems]);

  const updateFreeShippingProgress = (items: Product[]) => {
    const total = items.reduce(
      (sum, item) => sum + (item.price * (item.inventory ?? 0)),
      0
    );
    const progress = Math.min((total / 100) * 100, 100); 
    setFreeShippingProgress(progress);
  };

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id); 
        const updatedItems = getCartItems(); 
        setCartItems(updatedItems); 
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity); 
    const updatedItems = getCartItems(); 
    setCartItems(updatedItems); 
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      const newInventory = (product.inventory ?? 0) + 1;
      handleQuantityChange(id, newInventory); 
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      const newInventory = (product.inventory ?? 1) - 1;
      if (newInventory >= 1) {
        handleQuantityChange(id, newInventory);
      }
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (item.price * (item.inventory ?? 0)),
      0
    );
  };

  const handleApplyDiscount = () => {
    if (discountCode === "DISCOUNT10") {
      setDiscountApplied(true);
      Swal.fire("Success", "10% discount applied!", "success");
    } else {
      Swal.fire("Error", "Invalid discount code", "error");
    }
  };

  const handledProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "blue-500",
      cancelButtonColor: "red",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success🤩",
          "Your order has been successfully processed",
          "success"
        );
        router.push("/checkout");
        setCartItems([]); 
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-gradient-to-br from-red-200 via-amber-100 to-pink-200 min-h-screen">
      <h1 className="text-4xl font-semibold text-center mb-10 text-gray-900">Your Cart</h1>

      <div className="mb-6 bg-white p-6 rounded-xl shadow-xl">
        <div className="bg-gray-200 rounded-full h-4 overflow-hidden">
          <motion.div
            className="bg-teal-500 h-4 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${freeShippingProgress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <p className="text-lg font-medium text-teal-800 mt-3 text-center">
          {freeShippingProgress >= 100
            ? "🎉🥳 You've unlocked free shipping!"
            : `🛒 Spend $${(100 - calculatedTotal()).toFixed(2)} more for free shipping!`}
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="divide-y divide-gray-200">
          {cartItems.map((item) => {
            const key = item._id || `${item.title}-${item.price}`;

            return (
              <motion.div
                key={key}
                className="flex flex-col md:flex-row items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex items-center space-x-6 mb-4 md:mb-0">
                  {item.productImage && (
                    <Image
                      src={urlFor(item.productImage).url()}
                      alt={item.title}
                      width={96}
                      height={96}
                      className="w-24 h-24 object-cover rounded-lg shadow-md"
                    />
                  )}

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{`$${(item.price || 0).toFixed(2)}`}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => handleDecrement(item._id)}
                    className="w-10 h-10 flex items-center justify-center bg-teal-500 text-white rounded-full transition-all duration-300 shadow-lg hover:bg-blue-600"
                  >
                    ➖
                  </button>
                  <span className="text-xl text-gray-900">{item.inventory ?? 0}</span>
                  <button
                    onClick={() => handleIncrement(item._id)}
                    className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full transition-all duration-300 shadow-lg hover:bg-blue-600"
                  >
                    ➕
                  </button>
                </div>

                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 mt-4 md:mt-0"
                >
                  Remove
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Apply Discount Code</h2>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <input
            type="text"
            placeholder="Enter discount code"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 mb-4 sm:mb-0"
          />
          <button
            onClick={handleApplyDiscount}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-lg font-bold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Order Summary</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-700">Subtotal</span>
            <span className="text-gray-900">${calculatedTotal().toFixed(2)}</span>
          </div>
          {discountApplied && (
            <div className="flex justify-between text-green-600">
              <span>Discount (10%)</span>
              <span>-${(calculatedTotal() * 0.1).toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold">
            <span className="text-gray-900">Total</span>
            <span className="text-gray-900">
              ${discountApplied ? (calculatedTotal() * 0.9).toFixed(2) : calculatedTotal().toFixed(2)}
            </span>
          </div>
        </div>
        <button
          onClick={handledProceed}
          className="w-full font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 mt-6 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cartpage;


































