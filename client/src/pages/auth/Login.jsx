import React, { useState } from "react";
import { Layouts } from "../../Layouts/Layouts";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../Redux/Actions/User";

export const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { loading, error } = userLoginReducer;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginAction(email, password));
  };

  return (
    <>
      <Layouts>
        {loading ? (
          <h1>loading</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <form class="max-w-sm mx-auto " onSubmit={submitHandler}>
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        )}
      </Layouts>
    </>
  );
};
