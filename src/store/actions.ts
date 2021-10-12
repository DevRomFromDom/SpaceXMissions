export const getMissions = () => {
    return { type: "GET_MISSIONS" };
};
export const setMissions = (data: object[]) => {
    return { type: "SET_MISSIONS", payload: data };
};
export const reverseMissions = () => {
    return { type: "REVERSE_MISSIONS" };
};
