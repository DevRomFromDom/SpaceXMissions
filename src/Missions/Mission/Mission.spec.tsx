import React from "react";
import Mission from "./Mission";
import { render, screen } from "@testing-library/react";

describe("Mission test", () => {
    it("reners correctly", async () => {
        const mission = {
            name: "name",
            date_utc: "2019-12-05T17:29:23.000Z",
            details: "info",
            links: {
                flickr: {
                    original: ["https://live.staticflickr.com/65535/49178460143_e3ae2bd506_o.jpg"],
                },
            },
            rocket: "5e9d0d95eda69973a809d1ec",
            id: '5e9d0d95eda69973a809d1ec',
        };
        const { container } = render(<Mission mission={mission} />);
        expect(container.innerHTML).toMatch("name");
        expect(container.innerHTML).toMatch("info");
        expect(container.innerHTML).toMatch("05/12/2019");
        expect(screen.getByTestId("img-test").getAttribute("src")).toEqual(
            "https://live.staticflickr.com/65535/49178460143_e3ae2bd506_o.jpg"
        );
    });
});
