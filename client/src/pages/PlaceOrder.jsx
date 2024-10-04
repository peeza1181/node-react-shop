import React, { useState } from "react";
import { Layouts } from "../Layouts/Layouts";
import { useSelector } from "react-redux";
import { CartItem } from "../Components/CartItem";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export const PlaceOrder = () => {
  const cart = useSelector((state) => state.cartReducer);
  const { cartItems, shippingAddress } = cart;

  // subtotal (does not include the tax, shipping fee)
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  //subtotal price
  const subtotal = addDecimal(
    cartItems.reduce((total, item) => total + item.qty * item.price, 0)
  );
  const taxPrice = addDecimal(Number(0.15 * subtotal).toFixed(2));
  const shippingPrice = addDecimal(subtotal > 100 ? 0 : 20);
  // total
  const total = (
    Number(subtotal) +
    Number(taxPrice) +
    Number(shippingPrice)
  ).toFixed(2);

  //shipping address form data
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalcode, setPostalcode] = useState(shippingAddress.postalcode);
  const [country, setCountry] = useState(shippingAddress.country);

  return (
    <>
      <Layouts>
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  Order Summary
                </h2>

                <p class="leading-relaxed mb-4">
                  <CartItem cartItems={cartItems}></CartItem>
                </p>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">Subtotal</span>
                  <span class="ml-auto text-gray-900">${subtotal}</span>
                </div>
                <div class="flex border-t border-gray-200 py-2">
                  <span class="text-gray-500">Tax</span>
                  <span class="ml-auto text-gray-900">${taxPrice}</span>
                </div>
                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                  <span class="text-gray-500">Shipping Price</span>
                  <span class="ml-auto text-gray-900">${shippingPrice}</span>
                </div>
                <div class="flex flex-row-reverse">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    ${total}
                  </span>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 ">
                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                  Shipping Address
                </h2>

                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Postalcode
                  </label>
                  <input
                    type="text"
                    id="postalcode"
                    name="postalcode"
                    value={postalcode}
                    onChange={(e) => setPostalcode(e.target.value)}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <PayPalScriptProvider options={{ clientId: "test" }}>
                  <PayPalButtons
                  // createOrder={createOrder}
                  // onApprove={onApprove}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </section>
      </Layouts>
    </>
  );
};
