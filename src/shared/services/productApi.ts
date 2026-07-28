import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

import { Product } from "../types/product";


export const productApi = createApi({

    reducerPath: "productApi",


    baseQuery: fetchBaseQuery({

        baseUrl: "/api",

    }),



    endpoints: (builder) => ({



        getProducts: builder.query<Product[], void>({


            query: () => "/products",



            transformResponse: (

                response: {
                    products: Product[];
                }

            ) => {


                return response.products;


            },


        }),






        getProductBySlug: builder.query<Product, string>({


            query: (slug) => `/products/${slug}`,



            transformResponse: (

                response: {
                    product: Product;
                }

            ) => {


                return response.product;


            },


        }),




    }),


});




export const {

    useGetProductsQuery,

    useGetProductBySlugQuery,

} = productApi;