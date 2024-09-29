import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productListAction } from "../Redux/Actions/Product";
import { Link } from "react-router-dom";

export const Products = () => {
  const dispatch = useDispatch();
  const productListReducer = useSelector((state) => state.productListReducer);
  const { loading, error, products = [] } = productListReducer;

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                {products.map((product) => (
                  <div class="p-4 lg:w-1/4 md:w-1/2" key={product.id}>
                    <div class="bg-white">
                      <div class="max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div class="mt-6  gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                          <div class="group relative">
                            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                              <img
                                src={product.image}
                                alt="Front of men&#039;s Basic Tee in black."
                                class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                            </div>
                            <div class="mt-4 flex justify-between">
                              <div>
                                <h3 class="text-sm text-gray-700">
                                  <Link to={`/products/${product._id}`}>
                                    <span
                                      aria-hidden="true"
                                      class="absolute inset-0"
                                    ></span>
                                    {product.name}
                                  </Link>
                                </h3>
                                <p class="mt-1 text-sm text-gray-500">
                                  Review Count : {product.numReview}
                                </p>
                              </div>
                              <p class="text-sm font-medium text-gray-900">
                                ${product.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
