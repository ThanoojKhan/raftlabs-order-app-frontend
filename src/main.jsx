import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import QueryProvider from "./app/providers/QueryProvider";
import router from "./app/router";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryProvider>
            <>
                <RouterProvider router={router} />
                <Toaster position="top-center" />
            </>
        </QueryProvider>
    </React.StrictMode>
);