import { configureStore } from "@reduxjs/toolkit";

import { productApi } from "@/shared/services/productApi";
import { specialBoxApi } from "@/shared/services/specialBoxApi";


export const store = configureStore({

    reducer: {

        [productApi.reducerPath]:
            productApi.reducer,


        [specialBoxApi.reducerPath]:
            specialBoxApi.reducer,

    },


    middleware: (getDefaultMiddleware) =>

        getDefaultMiddleware()

        .concat(

            productApi.middleware,

            specialBoxApi.middleware

        ),

});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;