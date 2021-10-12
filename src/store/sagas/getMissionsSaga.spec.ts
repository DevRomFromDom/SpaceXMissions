import { rootSaga, fetchSpaceMissionsSaga } from "./rootSaga";
import { getSpaceMissions } from "./api";
import { call } from "@redux-saga/core/effects";

const data = [
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
        rocket: "5e9d0d95eda6997ertd1ec",
    },
];

jest.mock("./api.ts", () => ({
    getSpaceMissions: jest.fn(() => data),
}));

describe("getSpaceMissions", () => {
    describe("getSpaceMissions through api", () => {
        it("#GET_MISSIONS", async () => {
            
            const gen = fetchSpaceMissionsSaga();
            await rootSaga();
            expect(gen.next().value).toEqual(call(getSpaceMissions));
        });
    });
});
