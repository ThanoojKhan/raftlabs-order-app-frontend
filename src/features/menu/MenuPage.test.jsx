import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import MenuPage from "./MenuPage";
import * as api from "./menu.api";
import { vi } from "vitest";

vi.mock("./menu.api");

const mockMenu = [
    {
        _id: "1",
        name: "Pizza",
        description: "Cheesy",
        price: 200,
        image: "img",
        isAvailable: true,
    },
];

function renderWithProviders(ui) {
    const client = new QueryClient();

    return render(
        <MemoryRouter>
            <QueryClientProvider client={client}>{ui}</QueryClientProvider>
        </MemoryRouter>
    );
}

test("renders menu items from API", async () => {
    api.fetchMenu.mockResolvedValue(mockMenu);

    renderWithProviders(<MenuPage />);

    expect(await screen.findByText("Pizza")).toBeInTheDocument();
});