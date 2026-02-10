import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";
import useCartStore from "../../store/cartStore";

test("shows validation errors on empty submit", async () => {
    useCartStore.setState({
        items: [{ menuItem: "1", name: "Pizza", price: 100, quantity: 1 }],
    });

    render(
        <MemoryRouter>
            <CheckoutPage />
        </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Place Order"));

    expect(await screen.findByText("Name is required")).toBeInTheDocument();
});