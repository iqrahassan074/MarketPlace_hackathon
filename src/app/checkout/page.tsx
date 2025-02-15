"use client";

import React, { useState, useEffect } from "react";
import { Product } from "../../../types/Products";
import { getCartItems } from "../actions/actions";
import { urlFor } from "../../sanity/lib/image";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; 
import { client } from "@/sanity/lib/client";

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

  const [isClient, setIsClient] = useState(false); 
  const [processing, setProcessing] = useState(false); 
  const [router, setRouter] = useState<any>(null); 

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const routerInstance = useRouter();

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
  
  const handlePlaceOrder = async () => {  
    if (!validateForm()) {
      Swal.fire({
        title: "Error",
        text: "Please fill in all the required fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    setProcessing(true); 

    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      address: formValues.address,
      zipCode: formValues.zipCode,
      city: formValues.city,
      email: formValues.email,
      phone: formValues.phone,
      cartItems: cartItems.map((items) => ({
        _type: "reference",
        _ref: items._id,
      })),
      total: (subTotal - discount).toFixed(2),
      discount: discount,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);  
      localStorage.removeItem("appliedDiscount");
      
      Swal.fire({
        title: "Success!",
        text: "Your order has been placed successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        routerInstance.push("/");  
      });
    } catch (error) {
      console.error("Error creating order", error);
      Swal.fire({
        title: "Error",
        text: "There was an issue placing your order. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 via-amber-100 to-pink-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <nav className="flex items-center gap-2 text-black font-semibold text-lg mb-6">
          <Link href={"/cart"} className="transition duration-300 text-xl hover:underline">
            Cart
          </Link>
          <CgChevronRight className="text-white text-xl" />
          <span className="text-xl text-black">Checkout</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
         
          <div className="bg-white p-8 rounded-xl shadow-2xl hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
            {cartItems.length > 0 ? (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item._id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md">
                        {item.productImage && (
                          <Image
                            src={urlFor(item.productImage).url()}
                            alt={item.title}
                            className="object-cover w-full h-full"
                            width={80} 
                            height={80}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                        <p className="text-sm text-gray-500">Qty: {item.inventory}</p>
                      </div>
                    </div>
                    <p className="font-semibold text-lg text-gray-800">${(item.price * (item.inventory ?? 0)).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm font-medium text-gray-500">No items in cart</p>
            )}
            <div className="text-right mt-4 border-t pt-4">
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

        
          <div className="bg-white p-8 rounded-xl shadow-2xl hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing Information</h2>
            <form>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="w-full">
                    <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                    />
                    {formErrors.firstName && <p className="text-xs text-red-500">First name is required.</p>}
                  </div>

                  <div className="w-full">
                    <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      placeholder="Last Name"
                    />
                    {formErrors.lastName && <p className="text-xs text-red-500">Last name is required.</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                  />
                  {formErrors.email && <p className="text-xs text-red-500">Email is required.</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    value={formValues.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                  />
                  {formErrors.phone && <p className="text-xs text-red-500">Phone number is required.</p>}
                </div>

                <div>
                  <label htmlFor="address" className="text-sm font-semibold text-gray-700">Address</label>
                  <input
                    type="text"
                    id="address"
                    className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                    value={formValues.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                  />
                  {formErrors.address && <p className="text-xs text-red-500">Address is required.</p>}
                </div>

                <div className="flex gap-6">
                  <div className="w-full">
                    <label htmlFor="zipCode" className="text-sm font-semibold text-gray-700">Zip Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                      value={formValues.zipCode}
                      onChange={handleInputChange}
                      placeholder="Zip Code"
                    />
                    {formErrors.zipCode && <p className="text-xs text-red-500">Zip code is required.</p>}
                  </div>

                  <div className="w-full">
                    <label htmlFor="city" className="text-sm font-semibold text-gray-700">City</label>
                    <input
                      type="text"
                      id="city"
                      className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                      value={formValues.city}
                      onChange={handleInputChange}
                      placeholder="City"
                    />
                    {formErrors.city && <p className="text-xs text-red-500">City is required.</p>}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className={`w-full py-4 text-white font-bold text-lg rounded-lg transition duration-300 transform hover:scale-105 ${processing ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                  disabled={processing}
                >
                  {processing ? "Processing..." : "Place Order"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;









