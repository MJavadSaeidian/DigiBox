"use client";

import {
    ToastContainer
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import styles from "./toast.scss"


function ToastProvider() {

    return (

        <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="dark"
        />

    );

}


export default ToastProvider;