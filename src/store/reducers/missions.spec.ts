import missions from "./missions";
import { setMissions, reverseMissions } from "../actions";

describe("test missions reducer", () => {
    it("reducer set missions action", async () => {
        expect(
            missions(
                [],
                await setMissions([
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
                        id: "dfdfdfdfdf"
                    },
                ])
            )
        ).toEqual([
            
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
                    id: "dfdfdfdfdf"
                },
            
        ]);
    });
    it("reducer reverse missions action", async () => {
        expect(
            missions(
                [
                    {
                        name: "name1",
                        date_utc: "2019-12-05T17:29:23.000Z",
                        details: "info1",
                        links: {
                            flickr: {
                                original: ["https://live.staticflickr.com/65535/49178460143_e3ae2bd506_o.jpg"],
                            },
                        },
                        rocket: "5e9d0d95eda69973a809d1ec",
                        id: "dfddfgdfdfdfdf"
                    },
                    {
                        name: "name2",
                        date_utc: "2019-12-05T17:29:23.000Z",
                        details: "info2",
                        links: {
                            flickr: {
                                original: ["https://live.staticflickr.com/65535/49178460143_e3ae2bd506_o.jpg"],
                            },
                        },
                        rocket: "5e9d0d95eda69973a809d1ec",
                        id: "dfdfd456456fdfdf"
                    },
                ],
                await reverseMissions()
            )
        ).toEqual([
            {
                name: "name2",
                date_utc: "2019-12-05T17:29:23.000Z",
                details: "info2",
                links: {
                    flickr: {
                        original: ["https://live.staticflickr.com/65535/49178460143_e3ae2bd506_o.jpg"],
                    },
                },
                rocket: "5e9d0d95eda69973a809d1ec",
                id: "dfdfd456456fdfdf"
            },
            {
                name: "name1",
                date_utc: "2019-12-05T17:29:23.000Z",
                details: "info1",
                links: {
                    flickr: {
                        original: ["https://live.staticflickr.com/65535/49178460143_e3ae2bd506_o.jpg"],
                    },
                },
                rocket: "5e9d0d95eda69973a809d1ec",
                id: "dfddfgdfdfdfdf"
            },
        ]);
    });
});
