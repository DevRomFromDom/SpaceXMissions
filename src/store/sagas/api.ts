import "babel-polyfill";

export const getSpaceMissions = async ():Promise<object[]> => {
    const query = {
        query: {
            date_utc: {
                $gte: "2015-01-01T00:00:00.000Z",
                $lte: "2019-12-31T00:00:00.000Z",
            },
            success: true,
        },
        options: {
            limit: 200,
        },
    };
    return await fetch("https://api.spacexdata.com/v4/launches/query", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(query),
    })
        .then((res) => res.json())
        .then((data) => data.docs.reverse());
};

export const getRocketImage = async (id: string) => {
    return await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
        .then((res) => res.json())
        .then((data) => { return data.flickr_images});
};
