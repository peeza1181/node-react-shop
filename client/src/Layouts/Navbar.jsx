import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserDropdown } from "../Components/UserDropdown";
import { Link } from "react-router-dom";
import { userLogoutAction } from "../Redux/Actions/User";
import Checkout from "../pages/Checkout";

export const Navbar = () => {
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  const dispatch = useDispatch();

  const qty = useSelector((state) =>
    state.cartReducer.cartItems.reduce((total, item) => total + item.qty, 0)
  );

  const logoutHandler = () => {
    dispatch(userLogoutAction());
  };

  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://www.svgrepo.com/show/521840/shopping-bag.svg"
              class="h-8"
              alt="Home page"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Node Shop
            </span>
          </Link>
          <div class="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
            {!userInfo ? ( // เช็คว่าผู้ใช้ยังไม่ได้ล็อกอิน
              <>
                <Link
                  to="/login"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Register
                </Link>

                <button
                  data-collapse-toggle="navbar-cta"
                  type="button"
                  class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-cta"
                  aria-expanded="false"
                  onClick={() => setOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span>{qty}</span>
                </button>
                <Checkout open={open} setOpen={setOpen}></Checkout>
              </>
            ) : (
              <>
                <UserDropdown logoutHandler={logoutHandler}></UserDropdown>
                <button
                  data-collapse-toggle="navbar-cta"
                  type="button"
                  class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-cta"
                  aria-expanded="false"
                  onClick={() => setOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <span>{qty}</span>
                </button>
                <Checkout open={open} setOpen={setOpen}></Checkout>
              </>
            )}
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          ></div>
        </div>
      </nav>
    </div>
  );
};
