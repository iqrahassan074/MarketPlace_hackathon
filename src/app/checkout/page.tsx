"use client";

import React, { useState, useEffect } from "react";
import { Product } from "../../../types/Products";
import { getCartItems } from "../actions/actions";
import { urlFor } from "../../sanity/lib/image";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";
import Image from "next/image";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * (item.inventory ?? 0),
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const error = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(error);
    return Object.values(error).every((error) => !error);
  };

  const handlePlaceOrder = () => {
    if (validateForm()) localStorage.removeItem("appliedDiscount");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-200 via-yellow-200 to-orange-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 py-4 text-black">
          <Link href={"/cart"} className="text-lg font-bold transition duration-300">
            Cart
          </Link>
          <CgChevronRight className="text-white" />
          <span className="text-lg font-bold">Checkout</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-lime-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-500">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4 py-3 border-b hover:bg-gray-100 transition duration-300">
                  <div className="w-16 h-16 rounded-lg overflow-hidden shadow-md">
                    {item.productImage && (
                      <Image
                        src={urlFor(item.productImage).url()}
                        alt="image"
                        className="object-cover w-full h-full"
                        width={100} // Add a fixed width for the image
                        height={100} // Add a fixed height for the image
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-700">{item.title}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.inventory}</p>
                  </div>
                  <p className="font-semibold text-gray-700">${(item.price * (item.inventory ?? 0)).toFixed(2)}</p>
                </div>
              ))
            ) : (
              <p className="text-sm font-medium text-gray-500">No items in cart</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm text-gray-700">
                SubTotal: <span className="font-bold">${subTotal.toFixed(2)}</span>
              </p>
              <p className="text-sm text-gray-700">
                Discount: <span className="font-bold">${discount}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Total: <span className="font-bold">${(subTotal - discount).toFixed(2)}</span>
              </p>
            </div>
          </div>

        
          <div className="bg-lime-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition duration-500">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Billing Information</h2>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter Your First Name"
                  />
                  {formErrors.firstName && <p className="text-sm text-red-500">First Name is required</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter Your Last Name"
                  />
                  {formErrors.lastName && <p className="text-sm text-red-500">Last Name is required</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email"
                  />
                  {formErrors.email && <p className="text-sm text-red-500">Email is required</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    placeholder="Enter Your Phone"
                  />
                  {formErrors.phone && <p className="text-sm text-red-500">Phone is required</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    id="address"
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
                    value={formValues.address}
                    onChange={handleInputChange}
                    placeholder="Enter Your Address"
                  />
                  {formErrors.address && <p className="text-sm text-red-500">Address is required</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
                    value={formValues.zipCode}
                    onChange={handleInputChange}
                    placeholder="Enter Your Zip Code"
                  />
                  {formErrors.zipCode && <p className="text-sm text-red-500">Zip Code is required</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    id="city"
                    className="w-full p-3 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition duration-300"
                    value={formValues.city}
                    onChange={handleInputChange}
                    placeholder="Enter Your City"
                  />
                  {formErrors.city && <p className="text-sm text-red-500">City is required</p>}
                </div>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-md hover:from-indigo-500 hover:to-blue-500 transition duration-300 transform hover:scale-105"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;





