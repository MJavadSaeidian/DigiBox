import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";


export type SpecialBox = {

    _id: string;

    title: string;

    description: string;

    image: string;

    boxPrice: number;

    active: boolean;

    products: {

        product: string;

        quantity: number;

    }[];

};



export const specialBoxApi = createApi({

    reducerPath: "specialBoxApi",


    baseQuery: fetchBaseQuery({

        baseUrl: "/api",

    }),



    endpoints: (builder) => ({


        getSpecialBoxes: builder.query<SpecialBox[], void>({


            query: () => "/special-boxes",



            transformResponse: (

                response: {
                    boxes: SpecialBox[];
                }

            ) => {


                return response.boxes;


            },


        }),



        getSpecialBoxById: builder.query<SpecialBox, string>({


            query: (id) => `/special-boxes/${id}`,



            transformResponse: (

                response: {
                    box: SpecialBox;
                }

            ) => {


                return response.box;


            },


        }),



        addSpecialBox: builder.mutation<SpecialBox, Partial<SpecialBox>>({


            query: (body) => ({


                url: "/special-boxes",


                method: "POST",


                body,


            }),



        }),



        updateSpecialBox: builder.mutation<

            SpecialBox,

            {
                id: string;
                data: Partial<SpecialBox>;
            }

        >({


            query: ({ id, data }) => ({


                url: `/special-boxes/${id}`,


                method: "PUT",


                body: data,


            }),



        }),



        deleteSpecialBox: builder.mutation<

            void,

            string

        >({


            query: (id) => ({


                url: `/special-boxes/${id}`,


                method: "DELETE",


            }),



        }),



    }),



});



export const {


    useGetSpecialBoxesQuery,

    useGetSpecialBoxByIdQuery,

    useAddSpecialBoxMutation,

    useUpdateSpecialBoxMutation,

    useDeleteSpecialBoxMutation,


} = specialBoxApi;