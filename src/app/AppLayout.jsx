import { Outlet } from "react-router-dom";
import FloatingCartButton from "../components/FloatingCartButton";
import ScrollToTop from "./ScrollToTop";

export default function AppLayout() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
            <FloatingCartButton />
        </>
    );
}