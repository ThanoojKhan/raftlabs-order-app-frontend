import { render, screen, fireEvent } from "@testing-library/react";
import MenuCard from "./MenuCard";
import useCartStore from "../../store/cartStore";

const item = {
    _id: "1",
    name: "Burger",
    description: "Tasty",
    price: 100,
    image: "img",
    isAvailable: true,
};

test("adds item to cart", () => {
    render(<MenuCard item={item} />);

    fireEvent.click(screen.getByText("Add"));

    const state = useCartStore.getState();
    expect(state.items.length).toBe(1);
});