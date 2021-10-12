import React from "react";
import Missions from "./Missions";
import { render } from "@testing-library/react";

describe("Missions test", () => {
    it("reners correctly", async () => {
        const data = {
            launches: [
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
                {
                    name: "name2",
                    date_utc: "2020-12-05T17:29:23.000Z",
                    details: "info2",
                    links: {
                        flickr: {
                            original: ["https://live.staticflickr.com/65535/49178460143_e3ae2bd506_o.jpg"],
                        },
                    },
                    rocket: "5e9d0d95eda69973a809d1ec",
                },
            ],
        };
        const { container } = render(<Missions launches={data.launches} />);
        expect(container.getElementsByClassName("mission__wrapper").length).toBe(2);
    });
});
