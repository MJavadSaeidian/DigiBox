import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

import { Product } from "../types/product";


type ProductFilters = {

    categories?: string[];

    brands?: string[];

};



export const productApi = createApi({

    reducerPath: "productApi",


    baseQuery: fetchBaseQuery({

        baseUrl: "/api",

    }),



    endpoints: (builder) => ({



       getProducts: builder.query<Product[], ProductFilters>({

    query: ({
        categories = [],
        brands = []

    } = {}) => {


        const params = new URLSearchParams();
 


        if (categories.length) {

            params.append(
                "categories",
                categories.join(",")
            );

        }



        if (brands.length) {

            params.append(
                "brands",
                brands.join(",")
            );

        }



        const queryString = params.toString();



        return {

            url: queryString
                ?
                `/products?${queryString}`
                :
                "/products"

        };


    },


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