import React from "react";
import App from "./App";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";

describe("App test", () => {
    it("reners correctly with loading", async () => {
        const store = {
            getState: jest.fn(() => ({
                missions: [],
            })),
            subscribe: jest.fn(),
            dispatch: jest.fn(),
        };

        const { container } = render(
            <Provider store={store as any}>
                <App />
            </Provider>
        );
        expect(container.innerHTML).toMatch("Успешные космические миссии SpaceX за 2015-2019 года");
        expect(container.innerHTML).toMatch("Loading!!!");
    });
    it("reners correctly with missions", async () => {
        const store = {
            getState: jest.fn(() => ({
                missions: [
                    {
                        name: "name",
                        date_utc: "2019-12-05T17:29:23.000Z",
                        details: "info",
                        links: {
                            flickr: {
                                original: ["https://live.staticflickr.com/65535/49178460143_e3ae2bd506_o.jpg"],
                            },
                        },
                        rocket: "5e9d0d95eda69973a809d1ec",
                    },
                ],
            })),
            subscribe: jest.fn(),
            dispatch: jest.fn(),
        };

        const { container } = render(
            <Provider store={store as any}>
                <App />
            </Provider>
        );
        expect(container.innerHTML).toMatch("Успешные космические миссии SpaceX за 2015-2019 года");
        expect(container.innerHTML).not.toMatch("Loading!!!");
    });
});
