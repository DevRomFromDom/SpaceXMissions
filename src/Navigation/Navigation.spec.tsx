import React from "react";
import Navigation from "./Navigation";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";

describe("Navigation test", () => {
    it("reners correctly", async () => {
        const store = {
            getState: jest.fn(),
            subscribe: jest.fn(),
            dispatch: jest.fn(),
        };

        const { container } = render(
            <Provider store={store as any}>
                <Navigation />
            </Provider>
        );
        expect(container.innerHTML).toMatch("Название миссии");
        expect(container.innerHTML).toMatch("Дата запуска");
        expect(container.innerHTML).toMatch("Информация о миссии");
        expect(container.innerHTML).toMatch("Фото");
        expect(screen.getByTestId("btn-test")).not.toHaveClass("reverse");
    });
    it("btn click", async () => {
        const store = {
            getState: jest.fn(),
            subscribe: jest.fn(),
            dispatch: jest.fn(),
        };

        const { container } = render(
            <Provider store={store as any}>
                <Navigation />
            </Provider>
        );
        await act(async () => {
            fireEvent.click(screen.getByTestId("btn-test"));
        });
        expect(screen.getByTestId("btn-test")).toHaveClass("reverse");
    });
});
